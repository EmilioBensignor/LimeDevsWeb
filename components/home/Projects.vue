<template>
  <section class="w-full columnAlignCenter gap-5">
    <h2>Our most <span class="text-lime underline">recent work.</span></h2>
    <div class="w-full projectsContainer columnAlignCenter">
      <HomeProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>

<script setup>
import { projects } from "~/shared/projects";
</script>

<style>
.projectsContainer {
  gap: 5rem;
}

@media (width >=660px) {
  .projectsContainer {
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 0;
  }
}

@media (width >=992px) {
  .projectsContainer {
    justify-content: space-between;
    row-gap: 0;
  }
}
</style>

<style scoped>
section {
  gap: 2rem;
  padding: 2rem 1.5rem;
}

@media (width >=660px) {
  section {
    padding: 2.75rem 3.75rem;
  }
}

@media (width >=992px) {
  section {
    padding: 3.75rem 5.625rem;
  }
}
</style>