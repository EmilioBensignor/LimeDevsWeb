<template>
  <header class="center sticky top-0 bg-dark-violet">
    <button
      class="hamburger absolute"
      @click="toggleDrawer"
      aria-label="Open or close menu">
      <Icon class="text-white" size="2rem" name="mingcute:menu-fill" />
    </button>
    <NuxtLink :to="'/'">
      <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" />
    </NuxtLink>
    <div class="menuSidebar">
      <Drawer
        ref="drawer"
        :visible="drawerMenu"
        :show-close-button="false"
        @click="handleDrawerClick">
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
    <div class="menuDesktop">
      <nav>
        <ul class="menuList rowSpaceBetweenCenter">
          <li v-for="(item, index) in menu" :key="index">
            <NuxtLink :to="item.link" class="text-white no-underline">
              {{ item.title }}
            </NuxtLink>
          </li>
          <DefaultContact buttonClass="headerButton" />
        </ul>
      </nav>
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
            title: "About us",
          },
        ],
      };
    },
    methods: {
      toggleDrawer() {
        this.drawerMenu = !this.drawerMenu;
      },
      handleDrawerClick(event) {
        if (!this.$refs.drawer.$el.contains(event.target)) {
          this.closeDrawer();
        }
      },
      closeDrawer() {
        this.drawerMenu = false;
      },
    },
  };
</script>

<style>
  .p-drawer-mask {
    top: 3rem !important;
  }

  .p-drawer {
    width: 100% !important;
  }

  .p-drawer-header {
    display: none !important;
  }

  .p-drawer-content {
    width: 11.25rem !important;
    background: var(--color-dark-violet) !important;
    padding: 2.5rem 1rem !important;
  }

  @media (width >= 700px) {
    .p-drawer-mask {
      top: 4.75rem !important;
    }

    .p-drawer-content {
      width: 15.125rem !important;
      padding: 3.75rem !important;
    }
  }
</style>

<style scoped>
  header {
    z-index: 10;
    padding: 1rem 1.5rem;
  }

  header img {
    width: 2.5rem;
    height: 100%;
    object-fit: contain;
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

  .menuList li, .menuList div {
    position: relative;
    width: max-content;
    padding-bottom: 0.5rem;
  }

  .menuList li::before, .menuList div::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background-color: var(--color-dark-violet);
    transition: width 0.3s ease, background-color 0.3s ease;
  }

  .menuList li:hover::before, .menuList div:hover::before {
    width: 100%;
    background-color: var(--color-lime);
  }

  .menuList li a {
    position: relative;
    z-index: 1;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
  }

  .menuDesktop {
    display: none;
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

  @media (width >= 1080px) {
    header {
      justify-content: space-between;
      align-items: center;
      padding: 2rem 5.625rem;
    }

    header img {
      width: 5.75rem;
    }

    .menuSidebar,
    .hamburger {
      display: none;
    }

    .menuDesktop {
      display: inline;
    }

    .menuList {
      gap: 3.75rem;
    }
  }
</style>
