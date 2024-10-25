import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element instanceof HTMLElement) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        return {
          top: element.offsetTop - headerHeight - 10,
          behavior: 'smooth',
        };
      }
      return false;
    }
    return savedPosition || { left: 0, top: 0 };
  },
};
