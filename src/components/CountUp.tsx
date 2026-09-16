import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

/** Animates a number from 0 to `end` the first time it enters the viewport. */
export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;

            const startTime = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              // Ease-out cubic for a premium deceleration feel
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(end * eased);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
};
