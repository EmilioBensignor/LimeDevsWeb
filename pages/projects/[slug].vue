<template>
  <main>
    <ProjectMenu :project="project" />
    <div>
      <ProjectHero :project="project" />
      <ProjectDescription :project="project" />
      <ProjectOutcome :project="project" />
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'views'
})
import { projects } from "~/constants/projects";
import { useRoute } from "vue-router";

const route = useRoute();
const projectId = route.params.slug;

const project = projects.find((p) => p.slug === projectId);

if (!project) {
  throw new Error("Proyecto no encontrado");
}
</script>