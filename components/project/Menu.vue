<template>
  <section class="menu columnAlignCenter">
    <div class="columnAlignCenter">
      <h1 class="text-lime">{{ project.title }}</h1>
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
    data() {
      return {
        activeLink: "",
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
  };
</script>

<style scoped>
  .menu {
    gap: 2rem;
    padding: 2rem 1rem;
  }

  .menu > div:first-of-type {
    gap: 0.375rem;
  }

  nav {
    width: 100%;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    cursor: grab;
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
