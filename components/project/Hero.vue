<template>
  <section id="mainCharacteristics" class="hero columnAlignCenter">
    <div class="columnAlignCenter ">
      <div class="bg-violet">
        <h2 class="text-center">{{ project.phrase }}</h2>
      </div>
      <NuxtImg
        :src="`/images/projects/${project.banner}`"
        :alt="project.altBanner"
        class="w-full h-full"
      />
    </div>
    <div class="categories">
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
  padding: 0 1rem;
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
</style>
