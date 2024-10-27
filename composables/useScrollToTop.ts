import { useRouter } from 'vue-router';

export function useScrollToTop() {
  const router = useRouter();

  const scrollToTop = () => {
    // Detectar si estamos en iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // Solución específica para iOS
      window.scrollTo(0, 0);
    } else {
      try {
        const element = document.scrollingElement || document.documentElement;
        element.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } catch (e) {
        // Fallback
        window.scrollTo(0, 0);
      }
    }
  };

  router.afterEach(() => {
    nextTick(() => {
      scrollToTop();
    });
  });

  return {
    scrollToTop
  };
}