<template>
  <div>
    <h1>{{ project.title }}</h1>
    <p>{{ project.service }}</p>
    <NuxtLink to="/">Volver a la Home</NuxtLink>
  </div>
</template>

<script setup>
import { projects } from "~/constants/projects";
import { useRoute } from "vue-router";

const route = useRoute();
const projectId = route.params.slug;

const project = projects.find((p) => p.slug === projectId);

if (!project) {
  throw new Error("Proyecto no encontrado");
}
</script>