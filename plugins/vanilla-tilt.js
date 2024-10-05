import VanillaTilt from 'vanilla-tilt';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      vanillaTilt(el, options) {
        VanillaTilt.init(el, options);
      }
    }
  };
});
