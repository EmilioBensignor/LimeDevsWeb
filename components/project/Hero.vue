<template>
  <section
    id="mainCharacteristics"
    class="hero projectSection columnAlignCenter"
  >
    <div class="w-full columnAlignCenter">
      <div class="w-full bg-violet">
        <h2 class="text-center">{{ project.phrase }}</h2>
      </div>
      <NuxtImg
        :src="`/images/projects/${project.banner}`"
        :alt="project.altBanner"
        class="w-full h-full"
      />
    </div>
    <div class="w-full categories">
      <div class="bg-violet">
        <p class="text-lime font-bold">{{ project.service }}</p>
      </div>
      <div class="bg-violet">
        <p class="text-lime font-bold">{{ project.years }}</p>
      </div>
      <div class="bg-violet">
        <p class="text-lime font-bold">{{ project.country }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.hero {
  gap: 0.75rem;
  padding: 2rem 1rem 0 1rem;
}

.hero > div:first-of-type > div {
  border-radius: 18px 18px 0 0;
  padding: 0.75rem;
}

.hero > div:first-of-type > div p {
  font-weight: 500;
}

.hero img {
  border-radius: 0 0 18px 18px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.375rem;
}

.categories > div {
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
}

@media (width >= 700px) {
  .hero {
    gap: 1.25rem;
    padding: 0 3.75rem 3rem 3.75rem;
  }

  .hero > div:first-of-type {
    gap: 1.25rem;
  }

  .hero > div:first-of-type > div {
    background: none;
    padding: 0;
  }

  .hero > div:first-of-type > div h2 {
    text-align: start !important;
  }

  .hero img {
    border-radius: 26px;
  }

  .categories {
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .categories div {
    padding: 0.5rem 0.75rem;
  }

  .categories div p {
    font-size: 1.25rem;
  }
}

@media (width >= 1080px) {
  .hero {
    padding: 3.625rem 5.625rem 3.75rem 0;
  }

  .hero > div:first-of-type {
    gap: 1.75rem;
  }

  .hero img {
    max-height: 22.188rem;
    object-fit: cover;
    border-radius: 50px;
  }

  .categories {
    gap: 0.75rem;
  }

  .categories div {
    padding: 0.75rem 1rem;
  }

  .categories div p {
    font-size: 1.375rem;
  }
}

@media (width >= 1440px) {
  .hero {
    padding: 4rem 5.625rem 5rem 0;
  }

  .hero img {
    max-height: 25rem;
  }

  .categories div p {
    font-size: 1.5rem;
  }
}

@media (width >= 1920px) {
  .hero img {
    max-height: 30rem;
  }
}
</style>
