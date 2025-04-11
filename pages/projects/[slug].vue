<template>
  <main class="w-full columnAlignCenter">
    <div class="title">
      <h1 class="text-lime">{{ project.title }}</h1>
    </div>
    <div class="subtitle columnAlignCenter">
      <p>{{ project.service }}</p>
      <a :href="project.web" class="text-lime">{{ project.web }}</a>
    </div>
    <nav class="menuProject">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <a :href="item.link" @click.prevent="scrollToSection(item.link)"
            :class="{ active: activeSection === item.link.substring(1) }">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
    <section class="projectContainer">
      <div class="menuDesktop">
        <div class="column">
          <h1 class="text-lime">{{ project.title }}</h1>
          <p>{{ project.service }}</p>
          <a :href="project.web" class="text-lime">{{ project.web }}</a>
        </div>
        <nav class="menuProjectDesktop">
          <ul>
            <li v-for="(item, index) in menu" :key="index">
              <a :href="item.link" @click.prevent="scrollToSection(item.link)"
                :class="{ active: activeSection === item.link.substring(1) }">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ProjectHero :project="project" />
        <ProjectDescription :project="project" />
        <ProjectOutcome :project="project" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from "~/shared/projects";

definePageMeta({
  layout: "views",
});

// Datos reactivos
const activeSection = ref("");
const project = ref(null);
const sections = ref([]);
const menu = ref([
  { link: "#mainCharacteristics", title: "Main characteristics" },
  { link: "#theCompany", title: "The company" },
  { link: "#theChallenge", title: "The challenge" },
  { link: "#technologiesResources", title: "Technologies and Resources" },
  { link: "#outcome", title: "Project Outcome" },
]);

// Obtención del proyecto desde la URL
const route = useRoute();
const projectId = route.params.slug;
project.value = projects.find((p) => p.slug === projectId);

if (!project.value) {
  throw new Error("Proyecto no encontrado");
}

// Configuración SEO
useSeoMeta({
  title: () => `${project.value.title} | Lime Devs - Projects`,
  description: () => project.value.description || project.value.phrase,
  ogTitle: () => `${project.value.title} | Lime Devs - Projects`,
  ogDescription: () => project.value.description || project.value.phrase,
  ogImage: () => `/images/projects/${project.value.img}.webp`,
  ogUrl: () => `https://limedevs.com/projects/${project.value.slug}`,
  twitterTitle: () => `${project.value.title} | Lime Devs - Projects`,
  twitterDescription: () => project.value.description || project.value.phrase,
  twitterImage: () => `/images/projects/${project.value.img}.webp`,
  twitterCard: 'summary_large_image',
});

// Configuración de Schema.org para proyecto creativo
useSchemaOrg([
  defineWebPage({
    name: () => project.value.title,
    description: () => project.value.description || project.value.phrase,
    image: () => `https://limedevs.com/images/projects/${project.value.img}.webp`,
  }),
  {
    '@type': 'CreativeWork',
    name: () => project.value.title,
    description: () => project.value.description || project.value.phrase,
    image: () => `https://limedevs.com/images/projects/${project.value.img}.webp`,
    author: {
      '@type': 'Organization',
      name: 'Lime Devs',
      url: 'https://limedevs.com'
    },
    headline: () => project.value.phrase || project.value.title,
    datePublished: () => project.value.publishDate || new Date().toISOString(),
    keywords: () => project.value.keywords?.join(', ') || project.value.service,
    publisher: {
      '@type': 'Organization',
      name: 'Lime Devs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://limedevs.com/images/Lime-Devs-Logo.svg'
      }
    }
  }
]);

// Funciones para navegación
function scrollToSection(link) {
  const sectionId = link.substring(1);
  const element = document.getElementById(sectionId);

  if (element) {
    const offset = getOffsetAdjustment();
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
  } else {
    console.warn(`Elemento con id ${sectionId} no encontrado`);
  }
}

function handleScroll() {
  const scrollPosition = window.scrollY + getOffsetAdjustment();
  sections.value.forEach((section) => {
    if (section) {
      const sectionTop = section.offsetTop - 10;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = section.id;
      }
    }
  });
}

function getOffsetAdjustment() {
  const header = document.querySelector("header");
  const title = document.querySelector(".title");
  const menu = document.querySelector(".menuProject");

  const headerHeight = header ? header.offsetHeight : 0;
  const titleHeight = title ? title.offsetHeight : 0;
  const menuHeight = menu ? menu.offsetHeight : 0;

  return headerHeight + menuHeight + titleHeight;
}

// Hooks de ciclo de vida
onMounted(() => {
  sections.value = document.querySelectorAll(".projectSection");
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
main {
  padding-top: 2rem;
}

main>.subtitle {
  width: 100%;
  padding: 0 1rem;
}

.title {
  width: 100%;
  position: sticky;
  top: 3.5rem;
  background: var(--color-dark-violet);
  padding-bottom: 0.375rem;
  z-index: 11;
}

nav {
  width: 100%;
  display: flex;
  position: sticky;
  top: 5rem;
  background: var(--color-dark-violet);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 1rem;
  padding-right: 0;
  z-index: 3;
}

nav::-webkit-scrollbar {
  display: none;
}

nav ul {
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  cursor: grab;
  padding-right: 1rem;
}

nav ul::-webkit-scrollbar {
  display: none;
}

nav ul li {
  width: max-content;
}

nav ul li a {
  display: block;
  height: 2.625rem;
  border-radius: 5px;
  background: var(--gradient-violet-plain);
  color: var(--color-white);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.75rem;
}

nav ul li a.active {
  background: var(--gradient-violet-light);
}

.menuDesktop {
  display: none;
}

@media (width >=700px) {
  main {
    padding-top: 0;
  }

  .title {
    top: 5.75rem;
  }

  nav {
    top: 7.5rem;
    padding: 3rem 0 3rem 3.75rem;
  }

  nav ul {
    padding-right: 3.75rem;
  }

  nav ul li a {
    height: 2.75rem;
    font-size: 1rem;
  }
}

@media (width >=1080px) {
  .menuDesktop {
    display: flex;
  }

  .menuProject,
  .title,
  .subtitle {
    display: none;
  }

  main {
    padding: 3.75rem 0 3.75rem 5.625rem;
  }

  .menuDesktop {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .menuDesktop div {
    gap: 0.625rem;
  }

  h1 {
    text-align: start;
  }

  .menuDesktop div p,
  .menuDesktop div a {
    font-size: 1.25rem;
  }

  .projectContainer {
    display: flex;
    gap: 1.75rem;
    position: relative;
  }

  .menuDesktop {
    height: max-content;
    position: sticky;
    top: 12rem;
  }

  .menuProjectDesktop {
    position: relative;
    top: auto;
    padding: 0;
  }

  nav {
    position: relative;
    top: auto;
  }

  nav ul {
    width: 100%;
    flex-direction: column;
    padding: 0;
  }

  nav ul li {
    width: 100%;
  }

  nav ul li a {
    width: 100%;
    height: auto;
    border-radius: 999px;
    text-align: center;
    font-size: 1.125rem;
    color: #e7e7f099;
    padding: 1rem 2.5rem;
  }

  nav ul li a.active {
    color: var(--color-white);
  }
}

@media (width >=1440px) {
  main {
    padding: 5rem 0 5rem 5.625rem;
  }

  .projectContainer {
    gap: 2.5rem;
  }

  nav ul li a {
    font-size: 1.25rem;
  }
}

@media (width >=1920px) {
  .projectContainer {
    gap: 6rem;
  }
}
</style>
