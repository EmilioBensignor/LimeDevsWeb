// useScrollToTop.ts
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';

export function useScrollToTop() {
  const router = useRouter();

  const scrollToTop = () => {
    // Intentar diferentes métodos de scroll
    const methods = [
      // Método 1: scrollingElement
      () => document.scrollingElement?.scrollTo(0, 0),
      // Método 2: documentElement
      () => document.documentElement.scrollTo(0, 0),
      // Método 3: body
      () => document.body.scrollTo(0, 0),
      // Método 4: window
      () => window.scrollTo(0, 0)
    ];

    // Intentar cada método hasta que uno funcione
    methods.forEach(method => {
      try {
        method();
      } catch (e) {
        console.error('Scroll method failed:', e);
      }
    });
  };

  router.afterEach(() => {
    // Intentar scroll inmediatamente
    scrollToTop();

    // Y también después del siguiente tick
    nextTick(() => {
      scrollToTop();
      // Y una vez más después de un pequeño delay
      setTimeout(scrollToTop, 100);
    });
  });

  return {
    scrollToTop
  };
}