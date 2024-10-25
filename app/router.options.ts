import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);

          if (element instanceof HTMLElement) {
            const headerHeight = document.querySelector("header")?.offsetHeight || 0;
            resolve({
              top: element.offsetTop - headerHeight - 10,
              behavior: 'smooth',
            });
          } else {
            resolve(false);
          }
        }, 50);
      });
    }

    return savedPosition || { left: 0, top: 0 };
  },
};
