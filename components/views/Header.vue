<template>
  <header
    class="flex justify-center sticky top-0 z-10 bg-dark py-4 md:py-7 2xl:py-8 px-6 md:px-[3.75rem] 2xl:px-[5.625rem]">
    <NuxtLink :to="ROUTE_NAMES.HOME">
      <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo"
        class="w-[2.5rem] sm:w-12 md:w-[3.75rem] 2xl:w-[5.75rem] h-full object-cover" />
    </NuxtLink>
    <DefaultContact />
  </header>
</template>

<script setup>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
</script>


<style scoped>
header {
  z-index: 10;
  padding: 1rem 1.5rem;
}

header img {
  width: 2.5rem;
  height: 100%;
}

.headerBtn {
  display: none;
}

@media (width >=480px) {
  header img {
    width: 3rem;
  }
}

@media (width >=700px) {
  header {
    padding: 1.75rem 3.75rem;
  }

  header img {
    width: 3.75rem;
  }
}

@media (width >=1080px) {
  header {
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5.625rem;
  }

  header img {
    width: 5.75rem;
  }

  .headerBtn {
    display: block;
  }
}
</style>
