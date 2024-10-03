<template>
  <section class="w-full hero columnAlignCenter gap-4">
    <h1 class="column">
      <span>Where your <span class="text-lime">ideas</span></span>
      <span>find their <span class="text-lime">perfect shape.</span></span>
    </h1>
    <NuxtImg src="/images/home/animacionHero.png" alt="Animacion" />
  </section>
</template>

<style scoped>
.hero {
  padding: 2rem 1.5rem;
}

h1 {
  font-weight: 500;
}

h1 > span > span {
  font-weight: 800;
}

.hero > img {
  width: 11.75rem;
}

@media (width >= 700px) {
  .hero {
    flex-direction: row;
    padding: 2.75rem 3.75rem;
  }

  h1 {
    text-align: start;
  }
}

@media (width >= 1080px) {
  .hero {
    gap: 4.375rem !important;
    padding: 5.625rem;
  }

  .hero > img {
    width: 21.25rem;
  }
}
</style>
