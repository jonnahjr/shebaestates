import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Update document title
    document.title = `${title} | Queen of Sheba Highland Estate Co.`;

    // Update meta description if provided
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description, location.pathname]);

  return null;
};
