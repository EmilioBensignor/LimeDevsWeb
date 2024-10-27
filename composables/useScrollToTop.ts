import { useRouter } from 'vue-router';
import { nextTick } from 'vue';

export function useScrollToTop() {
  const router = useRouter();

  const scrollToTop = () => {
    // Usar requestAnimationFrame para forzar el scroll de manera fluida en móviles
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  router.afterEach(() => {
    scrollToTop();
    // Asegurar scroll después de siguiente tick y retraso adicional
    nextTick(() => {
      scrollToTop();
      setTimeout(scrollToTop, 100);
    });
  });

  return {
    scrollToTop
  };
}
