<template>
  <header class="center sticky top-0 bg-dark-violet">
    <NuxtLink :to="'/'">
      <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" />
    </NuxtLink>
    <NuxtLink to="#contactUs" class="headerBtn primaryButton">Contact Us</NuxtLink>
  </header>
</template>

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

  .headerBtn {
    display: block;
  }
}
</style>
