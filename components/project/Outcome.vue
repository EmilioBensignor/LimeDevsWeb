<template>
  <section id="outcome" class="outcome columnAlignCenter">
    <h2>Project Outcome</h2>
    <p class="text-center">{{ project.outcome }}</p>
    <div>
      SWIPER
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
.outcome {
  gap: 0.75rem;
  padding: 0 1rem 2rem 1rem;
}

.outcome > p:first-of-type {
  font-size: 0.75rem;
}
</style>