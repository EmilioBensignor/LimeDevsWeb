<template>
  <section class="w-full hero columnAlignCenter gap-4">
    <h1 class="column">
      <span>Where your <span class="text-lime">ideas</span></span>
      <span>find their <span class="text-lime">perfect shape.</span></span>
    </h1>
    <!-- <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/images/home/animacionHero.webp"
      width="100%"
      height="auto">
      <source src="/videos/" type="video/mp4" />
      Tu navegador no soporta el video.
    </video> -->
    <NuxtImg src="/images/home/animacionHero.webp" alt="Animacion" />
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
    height: 100%;
  }

  @media (width >= 700px) {
    .hero {
      flex-direction: row;
      justify-content: space-between;
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
