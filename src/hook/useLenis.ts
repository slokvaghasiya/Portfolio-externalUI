import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenis: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    if (lenis) return;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      autoResize: true,
    });

    function raf(time: number) {
      lenis?.lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return lenis;
}

export function getLenis() {
  return lenis;
}
