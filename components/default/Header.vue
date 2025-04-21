<template>
  <header class="sticky top-0 z-10 bg-dark py-4 md:py-7 2xl:py-8 px-6 md:px-[3.75rem] 2xl:px-[5.625rem]">
    <DefaultContent class="flex justify-center items-center 2xl:justify-between relative">
      <button class="flex justify-center items-center absolute left-0 2xl:hidden" @click="toggleDrawer"
        aria-label="Open or close menu">
        <Icon class="text-light" size="2rem" name="mingcute:menu-fill" />
      </button>
      <NuxtLink :to="'/'">
        <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo"
          class="w-[2.5rem] sm:w-12 md:w-[3.75rem] 2xl:w-[5.75rem] h-full object-cover" />
      </NuxtLink>
      <div class="2xl:hidden">
        <Drawer ref="drawer" :visible="drawerMenu" :show-close-button="false" @click="handleDrawerClick">
          <ul class="flex flex-col gap-8">
            <HeaderLink v-for="(item, index) in menu" :key="index">
              <NuxtLink :to="item.link" class="relative z-[1] text-xl md:text-2xl font-bold text-light no-underline"
                @click="toggleDrawer">
                {{ item.title }}
              </NuxtLink>
            </HeaderLink>
            <HeaderLink>
              <DefaultContact :headerButton="true" />
            </HeaderLink>
          </ul>
        </Drawer>
      </div>
      <div class="hidden 2xl:inline">
        <nav>
          <ul class="flex justify-between items-center gap-[3.75rem]">
            <HeaderLink v-for="(item, index) in menu" :key="index">
              <NuxtLink :to="item.link" class="relative z-[1] 2xl:text-2xl font-bold text-light no-underline">
                {{ item.title }}
              </NuxtLink>
            </HeaderLink>
            <HeaderLink>
              <DefaultContact :headerButton="true" />
            </HeaderLink>
          </ul>
        </nav>
      </div>
    </DefaultContent>
  </header>
</template>

<script setup>
const drawerMenu = ref(false);
const menu = ref([
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
]);

const toggleDrawer = () => {
  drawerMenu.value = !drawerMenu.value;
};

const handleDrawerClick = (event) => {
  if (!drawer.value.$el.contains(event.target)) {
    closeDrawer();
  }
};

const closeDrawer = () => {
  drawerMenu.value = false;
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

@media (width >=660px) {
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
/* @media (width >=1080px) {
  header {
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5.625rem;
  }

  header img {
    width: 5.75rem;
  }

  .menuDesktop {
    display: inline;
  }

  .menuList {
    gap: 3.75rem;
  }
} */
</style>
