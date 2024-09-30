<template>
  <section class="w-full projects columnAlignCenter">
    <h2>Our most <span class="text-lime underline">recent work.</span></h2>
    <Swiper
      :slides-per-view="1.2"
      :space-between="20"
      :breakpoints="{
        640: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 40,
        },
      }"
      class="swiperProjects">
      <SwiperSlide
        v-for="(project, index) in projects"
        :key="index"
        class="slideProject">
        <img
          :src="project.img"
          :alt="project.alt"
          class="w-full h-full" />
        <div class="projectInfo">
          <h3 class="text-center">{{ project.title }}</h3>
          <p class="text-center">{{ project.service }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            img: "/images/home/projectExample.png",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "/images/home/projectExample.png",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "/images/home/projectExample.png",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "/images/home/projectExample.png",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "/images/home/projectExample.png",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
          {
            img: "/images/home/projectExample.png",
            alt: "Project Example",
            title: "Stock Go",
            service: "Hardware and Software Design",
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .projects {
    padding: 2rem 1rem;
  }

  .swiperProjects {
    width: 100%;
    height: 18.75rem;
    cursor: grab;
    margin-top: 1.25rem;
  }

  .slideProject {
    width: 13.875rem !important;
    height: 100%;
    background-color: #39385ef2;
    border-radius: 18px;
    position: relative;
    overflow: hidden;
  }

  .slideProject img {
    transition: transform 0.3s ease;
  }

  .slideProject:hover img {
    transform: scale(1.05);
  }

  .projectInfo {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem 0;
    background: #39385EF2;
  }

  .projectInfo h3 {
    font-size: 1.125rem;
  }

  .projectInfo p {
    font-size: 0.75rem;
  }

  :deep(.swiper-wrapper) {
    display: flex;
    align-items: stretch;
  }

  :deep(.swiper-slide) {
    height: auto;
  }
</style>
