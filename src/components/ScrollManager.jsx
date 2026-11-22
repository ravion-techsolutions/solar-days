import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const main = document.getElementById('main-content');
    const behavior = firstRender.current ? 'auto' : 'smooth';

    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior, block: 'start' });
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        });
        firstRender.current = false;
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    main?.focus({ preventScroll: true });
    firstRender.current = false;
  }, [pathname, hash]);

  return null;
}
