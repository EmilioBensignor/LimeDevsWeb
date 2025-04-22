<template>
  <DefaultMain>
    <DefaultSection class="2xl:hidden">
      <DefaultContent>
        <div class="w-full sticky top-14 bg-dark pb-1.5 z-[11] 2xl:top-[5.75rem]">
          <TitleH1 class="text-primary">{{ project.title }}</TitleH1>
        </div>

        <div class="flex flex-col items-center gap-1 text-center 2xl:hidden">
          <p>{{ project.service }}</p>
          <a :href="project.web" class="text-primary">{{ project.web }}</a>
        </div>

        <nav class="w-full sticky top-20 bg-dark overflow-x-auto p-4 pr-0 z-[3] 2xl:hidden">
          <ul class="flex lg:justify-center gap-3 pr-4 whitespace-nowrap">
            <li v-for="(item, index) in menu" :key="index">
              <a :href="item.link" @click.prevent="scrollToSection(item.link)" :class="[
                'block h-[2.625rem] px-3 py-2 rounded text-sm font-medium text-light',
                'bg-[linear-gradient(90deg,#39385E,#39385E)]',
                activeSection === item.link.substring(1)
                  ? 'bg-[linear-gradient(90deg,#39385E,#7372B5)]'
                  : ''
              ]">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
      </DefaultContent>
    </DefaultSection>

    <DefaultSection>
      <DefaultContent class="flex gap-7 relative 2xl:flex-row 2xl:gap-[1.75rem] 3xl:gap-[2.5rem] 4xl:gap-[6rem]">
        <div class="hidden 2xl:flex flex-col gap-5 sticky top-[12rem] h-max">
          <div class="flex flex-col gap-2.5 text-left">
            <TitleH1 class="text-primary text-start">{{ project.title }}</TitleH1>
            <p class="text-xl">{{ project.service }}</p>
            <a :href="project.web" class="text-primary text-xl">{{ project.web }}</a>
          </div>
          <nav>
            <ul class="flex flex-col gap-2">
              <li v-for="(item, index) in menu" :key="index">
                <a :href="item.link" @click.prevent="scrollToSection(item.link)" :class="[
                  'block w-full rounded-full text-center text-[1.125rem] px-10 py-4 transition-colors',
                  activeSection === item.link.substring(1)
                    ? 'text-light'
                    : 'text-light/60'
                ]">
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
      </DefaultContent>
    </DefaultSection>
  </DefaultMain>
</template>


<script setup>
import { projects } from "~/shared/projects";

definePageMeta({
  layout: "views",
});

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

const route = useRoute();
const projectId = route.params.slug;
project.value = projects.find((p) => p.slug === projectId);

if (!project.value) {
  throw new Error("Proyecto no encontrado");
}

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

onMounted(() => {
  sections.value = document.querySelectorAll(".projectSection");
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>