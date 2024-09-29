<template>
  <section class="w-full projects columnAlignCenter">
    <h2>Our most <span class="text-lime underline">recent work.</span></h2>
    <div class="swiper swiperProjects">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(project, index) in projects"
          :key="index">
          <NuxtImg
            :src="`/images/home/${project.img}.png`"
            :alt="project.alt" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.service }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { Swiper } from "swiper";
  import "swiper/css";

  export default {
    data() {
      return {
        projects: [
          {
            img: "projectExample",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "projectExample",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "projectExample",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "projectExample",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "projectExample",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "projectExample",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
        ],
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
    methods: {
      initSwiper() {
        new Swiper(".swiperProjects", {
          slidesPerView: "auto",
          spaceBetween: 12,
        });
      },
    },
  };
</script>

<style scoped>
  .projects {
    padding: 2rem 0 2rem 1rem;
  }

  .swiper-slide {
    width: 300px; /* Ajusta según tus necesidades */
  }
</style>
