import { useRouter } from 'vue-router';
import { nextTick } from 'vue';

export function useScrollToTop() {
  const router = useRouter();

  const scrollToTop = () => {
    const scrollMethods = [
      () => document.scrollingElement?.scrollTo({ top: 0, behavior: 'smooth' }),
      () => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }),
      () => document.body.scrollTo({ top: 0, behavior: 'smooth' }),
      () => window.scrollTo({ top: 0, behavior: 'smooth' })
    ];

    scrollMethods.forEach(method => {
      try {
        requestAnimationFrame(() => method());
      } catch (e) {
        console.error('Scroll method failed:', e);
      }
    });
  };

  router.afterEach(() => {
    scrollToTop();
    nextTick(() => {
      scrollToTop();
      setTimeout(scrollToTop, 100);
    });
  });

  return {
    scrollToTop
  };
}
