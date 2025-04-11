<template>
  <section class="w-full hero columnAlignCenter gap-4">
    <h1 class="column">
      <span>Turning <span class="text-lime">ideas</span> into</span>
      <span>real <span class="text-lime">tech solutions.</span></span>
    </h1>
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/images/home/Product-Delivery-Software-Development-Frame-0.webp"
      width="50%"
      height="auto"
    >
      <source
        src="/videos/Product-Delivery-Software-Development.webm"
        type="video/webm"
      />
      Tu navegador no soporta el video.
    </video>
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
  font-weight: 600;
}

.hero > video {
  width: 75%;
  height: 100%;
  background: none;
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

  .hero > video {
    width: 35%;
  }
}

@media (width >= 1080px) {
  .hero {
    gap: 4.375rem !important;
    padding: 5.625rem;
  }
}

@media (width >= 1600px) {
  .hero > video {
    width: 40%;
  }
}
</style>
