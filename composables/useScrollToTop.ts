// useScrollToTop.ts
import { useRouter } from 'vue-router';

export function useScrollToTop() {
  const router = useRouter();

  const scrollToTop = () => {
    try {
      // Intenta primero con smooth scroll
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {
      // Fallback para navegadores que no soportan smooth scroll
      try {
        // Intenta con requestAnimationFrame para una animación suave manual
        const scrollStep = () => {
          const currentPosition = window.pageYOffset;
          if (currentPosition > 0) {
            window.requestAnimationFrame(scrollStep);
            window.scrollTo(0, currentPosition - currentPosition / 8);
          }
        };
        window.requestAnimationFrame(scrollStep);
      } catch (e2) {
        // Último recurso: scroll instantáneo
        window.scrollTo(0, 0);
      }
    }
  };

  router.afterEach(() => {
    // Pequeño delay para asegurar que la navegación se ha completado
    setTimeout(scrollToTop, 100);
  });

  return {
    scrollToTop
  };
}