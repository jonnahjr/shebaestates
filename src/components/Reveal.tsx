import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in milliseconds before the reveal transition starts */
  delay?: number;
  /** Vertical distance (px) the content rises from when revealing */
  y?: number;
  className?: string;
}

/**
 * Reveals its children with a soft fade-and-rise animation the first time
 * they scroll into the viewport. Falls back to always-visible when
 * IntersectionObserver is unavailable.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 28,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};
