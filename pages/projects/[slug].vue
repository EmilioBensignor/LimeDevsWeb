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
          <a
            :href="item.link"
            @click.prevent="scrollToSection(item.link)"
            :class="{ active: activeSection === item.link.substring(1) }"
          >
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
          <a :href="project.web" class="text-lime">{{
            project.web
          }}</a>
        </div>
        <nav class="menuProjectDesktop">
          <ul>
            <li v-for="(item, index) in menu" :key="index">
              <a
                :href="item.link"
                @click.prevent="scrollToSection(item.link)"
                :class="{ active: activeSection === item.link.substring(1) }"
              >
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
        const offset = this.getOffsetAdjustment();
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + this.getOffsetAdjustment();
      this.sections.forEach((section) => {
        const sectionTop = section.offsetTop - 10;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection = section.id;
        }
      });
    },
    getOffsetAdjustment() {
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

@media (width >= 700px) {
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

@media (width >= 1080px) {
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

@media (width >= 1440px) {
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
</style>
