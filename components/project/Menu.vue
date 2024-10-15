<template>
  <section class="menu columnAlignCenter">
    <div class="columnAlignCenter">
      <h1 class="text-lime">{{ project.title }}</h1>
      <p>{{ project.service }}</p>
      <NuxtLink :to="project.web" class="text-lime">{{ project.web }}</NuxtLink>
    </div>
    <div>
      NAVEGACION
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .menu {
    gap: 2rem;
    padding: 2rem 1rem;
  }

  .menu > div:first-of-type {
    gap: 0.375rem;
  }
</style>