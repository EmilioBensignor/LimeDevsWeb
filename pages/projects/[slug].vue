<template>
  <main class="w-full columnAlignCenter">
    <h1 class="text-lime">{{ project.title }}</h1>
    <div class="columnAlignCenter">
      <p>{{ project.service }}</p>
      <NuxtLink :to="project.web" class="text-lime">{{ project.web }}</NuxtLink>
    </div>
    <nav>
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
    <div>
      <ProjectHero :project="project" />
      <ProjectDescription :project="project" />
      <ProjectOutcome :project="project" />
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "views",
});
</script>

<script>
import { projects } from "~/constants/projects";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      activeLink: "",
      project: null,
      menu: [
        {
          link: "#mainCharacteristics",
          title: "Main characteristics",
        },
        {
          link: "#theCompany",
          title: "The company",
        },
        {
          link: "#theChallenge",
          title: "The challenge",
        },
        {
          link: "#technologiesResources",
          title: "Technologies and Resources",
        },
        {
          link: "#outcome",
          title: "Project Outcome",
        },
      ],
    };
  },
  created() {
    const route = useRoute();
    const projectId = route.params.slug;

    this.project = projects.find((p) => p.slug === projectId);

    if (!this.project) {
      throw new Error("Proyecto no encontrado");
    }
  },
};
</script>

<style scoped>
main > div:first-of-type {
  width: 100%;
  padding: 0 1rem;
}

main h1 {
  width: 100%;
  position: sticky;
  top: 2rem;
  background: var(--color-dark-violet);
  padding-top: 2rem;
  padding-bottom: 0.375rem;
  z-index: 3;
}

nav {
  width: 100%;
  display: flex;
  position: sticky;
  top: 5.75rem;
  background: var(--color-dark-violet);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  padding: 2rem 1rem;
  z-index: 3;
}

nav::-webkit-scrollbar {
  display: none;
}

nav ul {
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  cursor: grab;
  white-space: nowrap;
}

nav ul li {
  width: max-content;
  border-radius: 5px;
  background: var(--gradient-violet-plain);
  padding: 0.75rem;
}

nav ul li.active {
  background: var(--gradient-violet-light);
}

nav ul li a {
  color: var(--color-white);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
}
</style>
