import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      }}
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-[60] flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-line bg-white text-navy-900 shadow-lift transition-transform duration-300 hover:-translate-y-1 sm:bottom-7 sm:left-7"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
