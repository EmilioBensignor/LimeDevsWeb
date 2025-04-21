<template>
  <DefaultSection>
    <DefaultContent class="flex flex-col items-center gap-8">
      <TitleH2>Our most <span class="text-primary font-extrabold underline">recent work.</span></TitleH2>
      <div
        class="w-full flex flex-col items-center gap-20 md:justify-center md:flex-row md:flex-wrap md:gap-y-0 xl:justify-between">
        <HomeProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
      </div>
    </DefaultContent>
  </DefaultSection>
</template>

<script setup>
import { projects } from "~/shared/projects";
</script>