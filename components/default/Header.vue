<template>
  <header class="center sticky top-0 bg-dark-violet">
    <button class="hamburger absolute" @click="toggleDrawer">
      <Icon class="text-white" size="2rem" name="mingcute:menu-fill" />
    </button>
    <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" />
    <div class="menuSidebar">
      <Drawer
        :visible="drawerMenu"
        :show-close-button="false"
        @click-outside="closeDrawer">
        <ul class="menuList column">
          <li v-for="(item, index) in menu" :key="index">
            <NuxtLink
              :to="item.link"
              class="text-white no-underline"
              @click="toggleDrawer">
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

  @media (width >= 700px) {
    .p-drawer-mask {
      width: 15.125rem !important;
      top: 4.75rem !important;
    }

    .p-drawer-content {
      padding: 3.75rem !important;
    }
  }
</style>

<style scoped>
  header {
    z-index: 5;
    padding: 1rem 1.5rem;
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

  .menuList li {
    position: relative;
    width: max-content;
    padding-bottom: 0.5rem;
  }

  .menuList li::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background-color: var(--color-dark-violet);
    transition: width 0.4s ease-in-out;
  }

  .menuList li:hover::before {
    width: 100%;
    background-color: var(--color-lime);
  }

  .menuList li a {
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    position: relative;
    z-index: 1;
  }

  @media (width >= 480px) {
    header img {
      width: 3rem;
    }
  }

  @media (width >= 700px) {
    header {
      padding: 1.75rem 3.75rem;
    }

    header img {
      width: 3.75rem;
    }

    .hamburger {
      left: 3.75rem;
    }

    .menuList li a {
      font-size: 1.5rem;
    }
  }
</style>
