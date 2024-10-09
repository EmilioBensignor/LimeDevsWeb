<template>
  <section class="w-full projects columnAlignCenter">
    <h2>Our most <span class="text-lime underline">recent work.</span></h2>
    <Swiper
      :slides-per-view="1.3"
      :space-between="12"
      :breakpoints="{
        380: {
          slidesPerView: 1.5,
        },
        450: {
          slidesPerView: 1.8,
        },
        550: {
          slidesPerView: 2.2,
        },
        700: {
          slidesPerView: 2.8,
          spaceBetween: 16,
        },
      }"
      class="swiperProjects"
    >
      <SwiperSlide
        v-for="(project, index) in projects"
        :key="index"
        class="slideProject"
      >
        <img :src="project.img" :alt="project.alt" class="w-full h-full" />
        <div class="projectInfo">
          <h3 class="text-center">{{ project.title }}</h3>
          <p class="text-center">{{ project.service }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="w-full projectsDesktop">
      <article
        v-for="(project, index) in projects"
        :key="index"
        :ref="'tiltProjectDesktop' + index"
        class="slideProject"
      >
        <img :src="project.img" :alt="project.alt" class="w-full h-full" />
        <div class="projectInfo">
          <h3 class="text-center">{{ project.title }}</h3>
          <p class="text-center">{{ project.service }}</p>
        </div>
      </article>
    </div>
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
          title: "Your next project",
          service: "Start your next project now",
        },
      ],
    };
  },
  mounted() {
    this.projects.forEach((project, index) => {
      const tiltElementDesktop = this.$refs[`tiltProjectDesktop${index}`][0];
      this.$vanillaTilt(tiltElementDesktop, {
        max: 20,
        speed: 600,
      });
    });
  },
};
</script>

<style scoped>
.projects {
  gap: 1.25rem;
  padding: 2rem 0 2rem 1.5rem;
}

h2 {
  padding-right: 1rem;
}

.swiperProjects {
  width: 100%;
  height: 18.625rem;
  cursor: grab;
}

.slideProject {
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
  background: #39385ef2;
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

.projectsDesktop {
  display: none;
}

@media (width >= 700px) {
  .projects {
    gap: 2rem;
    padding: 2.75rem 0 2.75rem 3.75rem;
  }

  h2 {
    width: 100%;
    text-align: start;
    padding-right: 3.75rem;
  }

  .projectInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    padding: 0.875rem;
  }

  .projectInfo h3 {
    font-size: 1.25rem;
  }

  .projectInfo p {
    font-size: 0.875rem;
  }
}

@media (width >= 850px) {
  .swiperProjects {
    height: 21rem;
  }

  .projectInfo h3 {
    font-size: 1.375rem;
  }

  .projectInfo p {
    font-size: 1rem;
  }
}

@media (width >= 1080px) {
  .swiperProjects {
    display: none;
  }

  .projects {
    gap: 0;
    padding: 3.813rem 5.625rem 8.438rem 5.625rem;
  }

  h2 {
    padding: 0;
  }

  .projectsDesktop {
    width: 100%;
    height: 68rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    position: relative;
  }

  .projectsDesktop article {
    width: 16.25rem;
    height: 22.5rem;
    position: absolute;
    border-radius: 12px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    will-change: transform;
    overflow: visible;
  }

  .projectsDesktop img{
    border-radius: 12px;
  }

  .projectsDesktop article:nth-child(1) {
    top: 5.063rem;
    left: 0;
  }
  .projectsDesktop article:nth-child(2) {
    top: 13.5rem;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  .projectsDesktop article:nth-child(3) {
    top: 2.313rem;
    right: 0;
  }
  .projectsDesktop article:nth-child(4) {
    bottom: 11rem;
    left: 0;
  }
  .projectsDesktop article:nth-child(5) {
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .projectsDesktop article:nth-child(6) {
    bottom: 14rem;
    right: 0;
  }

  .projectInfo {
    background-color: transparent;
  }

  .projectInfo {
    transform: translateZ(20px);
  }

  .projectInfo {
    height: max-content;
    align-items: flex-start;
    gap: 0.75rem;
    z-index: 1;
    top: 50%;
    left: 0;
  }

  .projectInfo h3 {
    max-width: 75%;
    text-align: start !important;
    position: relative;
    z-index: 2;
    font-size: 2rem;
    margin-left: -2.5rem;
  }

  .projectInfo p {
    font-size: 1rem;
  }
}

@media (width >= 1440px) {
  .projectsDesktop {
    height: 76rem;
  }

  .projectsDesktop article {
    width: 20.125rem;
    height: 25.375rem;
  }
}

@media (width >= 1920px) {
  .projectsDesktop {
    height: 83rem;
  }

  .projectsDesktop article {
    width: 25rem;
    height: 28rem;
  }
}
</style>
