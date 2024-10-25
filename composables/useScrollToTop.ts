import { useRouter } from 'vue-router';

export function useScrollToTop() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  router.afterEach(() => {
    scrollToTop();
  });
}