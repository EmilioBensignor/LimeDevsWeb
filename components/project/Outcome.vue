<template>
  <section id="outcome" class="outcome flex flex-col items-center gap-3">
    <TitleH2>Project Outcome</TitleH2>
    <p class="text-center text-xs md:text-base 2xl:text-xl 2xl:text-start">{{ project.outcome }}</p>
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