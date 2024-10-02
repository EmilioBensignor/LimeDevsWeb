<template>
  <div>
    <DefaultHeader />
    <slot />
    <DefaultFooter />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$router.options.scrollBehavior = (to, from, savedPosition) => {
        if (to.hash) {
          return new Promise((resolve) => {
            setTimeout(() => {
              const element = document.querySelector(to.hash);
              if (element) {
                const headerHeight =
                  document.querySelector("header").offsetHeight;
                resolve({
                  top: element.offsetTop - headerHeight - 10,
                  behavior: "smooth",
                });
              } else {
                resolve(false);
              }
            }, 50);
          });
        }
        return savedPosition || { x: 0, y: 0 };
      };
    },
  };
</script>
