<template>
  <main class="w-full columnAlignCenter">
    <div class="title">
      <h1 class="text-lime">{{ project.title }}</h1>
    </div>
    <div class="subtitle columnAlignCenter">
      <p>{{ project.service }}</p>
      <NuxtLink :to="project.web" class="text-lime">{{ project.web }}</NuxtLink>
    </div>
    <nav class="menuProject">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <a
            :href="item.link"
            @click.prevent="scrollToSection(item.link)"
            :class="{ active: activeSection === item.link.substring(1) }">
            {{ item.title }}
          </a>
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

<script>
  import { projects } from "~/constants/projects";
  import { useRoute } from "vue-router";

  export default {
    data() {
      return {
        activeSection: "",
        project: null,
        sections: [],
        menu: [
          { link: "#mainCharacteristics", title: "Main characteristics" },
          { link: "#theCompany", title: "The company" },
          { link: "#theChallenge", title: "The challenge" },
          {
            link: "#technologiesResources",
            title: "Technologies and Resources",
          },
          { link: "#outcome", title: "Project Outcome" },
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
    mounted() {
      this.sections = document.querySelectorAll(".projectSection");
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      scrollToSection(link) {
        const sectionId = link.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const offset = this.getOffsetAdjustment(); // Ajustamos el offset por el sticky
          window.scrollTo({
            top: element.offsetTop - offset, // Ajustamos el scroll
            behavior: "smooth",
          });
        }
      },
      handleScroll() {
        const scrollPosition = window.scrollY + this.getOffsetAdjustment(); // Sumamos el offset
        this.sections.forEach((section) => {
          const sectionTop = section.offsetTop - 10;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            this.activeSection = section.id;
          }
        });
      },
      getOffsetAdjustment() {
        // Calculamos el tamaño del header sticky y del menú
        const headerHeight = document.querySelector("header").offsetHeight;
        const titleHeight = document.querySelector(".title").offsetHeight;
        const menuHeight = document.querySelector(".menuProject").offsetHeight;
        return headerHeight + menuHeight + titleHeight;
      },
    },
  };
</script>

<style scoped>
  main {
    padding-top: 2rem;
  }

  main > .subtitle {
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
</style>
