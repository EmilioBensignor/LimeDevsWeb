<template>
  <header class="center relative bg-dark-violet">
    <button class="hamburger absolute" @click="toggleDrawer">
      <Icon class="text-white" size="2rem" name="mingcute:menu-fill" />
    </button>
    <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" />
    <div class="menuSidebar">
      <Drawer
        :visible="drawerMenu"
        :show-close-button="false"
        @click-outside="closeDrawer"
      >
        <ul class="menuList column">
          <li v-for="(item, index) in menu" :key="index">
            <NuxtLink :to="item.link" class="text-white no-underline" @click="toggleDrawer">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </Drawer>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawerMenu: false,
      menu: [
        {
          link: "#services",
          title: "Services",
        },
        {
          link: "#projects",
          title: "Projects",
        },
        {
          link: "#aboutUs",
          title: "About Us",
        },
        {
          link: "#contactUs",
          title: "Contact Us",
        },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerMenu = !this.drawerMenu;
    },
    closeDrawer() {
      this.drawerMenu = false;
    },
    handleClickOutside(event) {
      const drawer = this.$refs.drawer;
      if (drawer && !drawer.contains(event.target)) {
        this.closeDrawer();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style>
.p-drawer-mask {
  width: 11.25rem !important;
  top: 3rem !important;
}

.p-drawer-header {
  display: none !important;
}

.p-drawer-content {
  background: var(--color-dark-violet) !important;
  padding: 2.5rem 1rem !important;
}
</style>

<style scoped>
header {
  z-index: 5;
  padding: 1rem;
}

header img {
  width: 2.5rem;
}

.hamburger {
  left: 1rem;
  background: none;
  border: none;
  cursor: pointer;
}

.menuList {
  gap: 2rem;
}

.menuList li a {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
