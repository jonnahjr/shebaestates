import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores sane scroll behavior on SPA navigation: scrolls to the top of the
 * page whenever the route path changes, or to the element referenced by the
 * URL hash (e.g. /products/coffee#gesha) when one is present.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow a frame for the target page to render before scrolling
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0 });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}
