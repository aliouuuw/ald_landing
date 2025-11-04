import Lenis from 'lenis';

/**
 * Initialize Lenis smooth scroll with luxury-focused configuration
 * Provides buttery-smooth, physics-based scrolling throughout the site
 */
export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,           // Smooth, leisurely scroll duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for natural feel
    orientation: 'vertical',  // Vertical scrolling
    gestureOrientation: 'vertical',
    smoothWheel: true,        // Smooth mousewheel scrolling
    wheelMultiplier: 1,       // Natural scroll speed
    touchMultiplier: 2,       // Slightly faster on touch devices
    infinite: false,          // No infinite scroll
  });

  // Sync Lenis with requestAnimationFrame for 60fps
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
}

/**
 * Scroll to a specific section smoothly
 */
export function scrollToSection(target: string | HTMLElement, lenis: Lenis) {
  lenis.scrollTo(target, {
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
}

/**
 * Get scroll direction (useful for nav behavior)
 */
export function getScrollDirection(lenis: Lenis): 'up' | 'down' | null {
  return lenis.direction === 1 ? 'down' : lenis.direction === -1 ? 'up' : null;
}

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store instance for external access
    (lenisInstance as any) = lenis;

    // Integrate with Framer Motion
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }: any) => {
      // Custom scroll events can be handled here
    });

    return () => {
      lenis.destroy();
      (lenisInstance as any) = null;
    };
  }, []);
}

// Export lenis instance for external access
let lenisInstance: Lenis | null = null;

export function getLenisInstance() {
  return lenisInstance;
}

export function scrollTo(target: string | number, offset = 0) {
  if (!lenisInstance) return;
  
  if (typeof target === 'string') {
    const element = document.querySelector(target);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      lenisInstance.scrollTo(rect.top + scrollTop - offset);
    }
  } else {
    lenisInstance.scrollTo(target);
  }
}
