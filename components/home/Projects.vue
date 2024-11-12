<template>
  <section class="w-full projects columnAlignCenter">
    <h2>Our most <span class="text-lime underline">recent work.</span></h2>
    <Swiper
      :slides-per-view="1.3"
      :space-between="12"
      :free-mode="true"
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
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
      }"
      class="swiperProjects">
      <SwiperSlide
        v-for="(project, index) in projects"
        :key="index"
        class="slideProject">
        <div class="h-full">
          <!-- :to="`/projects/${project.slug}`"
          :aria-label="`See more about ${project.title}`" -->
          <img
            :src="`/images/projects/${project.img}-Lime-Devs-Project.webp`"
            :alt="project.alt"
            class="w-full h-full projectImg" />
          <div class="projectInfo">
            <h3 class="text-center text-white">{{ project.title }}</h3>
            <p class="text-center text-white">{{ project.service }}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="slideProject">
        <NuxtLink to="#contactUs" aria-label="See more about your next project" class="h-full">
          <img
            src="/images/projects/Your-Next-Lime-Devs-Project.webp"
            alt="Your next project"
            class="w-full h-full projectImg" />
          <div class="projectInfo nextProject">
            <h3 class="text-center text-white">Your Next Project</h3>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
    <div class="w-full projectsDesktop">
      <article
        v-for="(project, index) in projects"
        :key="index"
        :ref="'tiltProjectDesktop' + index"
        class="slideProject">
        <div class="w-full h-full flex">
          <!-- :to="`/projects/${project.slug}`"
          :aria-label="`See more about ${project.title}`" -->
          <img
            :src="`/images/projects/${project.img}-Lime-Devs-Project.webp`"
            :alt="project.alt"
            class="w-full h-full" />
          <div class="projectInfo">
            <h3 class="text-center text-white">{{ project.title }}</h3>
            <p class="text-center text-white">{{ project.service }}</p>
            <!-- <p class="seeMore text-white underline">See more</p> -->
          </div>
        </div>
      </article>
      <article :ref="'tiltProjectDesktop' + 6" class="slideProject yourProject">
        <NuxtLink to="#contactUs" aria-label="See more about your next project" class="w-full h-full flex">
          <img
            src="/images/projects/Your-Next-Lime-Devs-Project.webp"
            alt="Your next project"
            class="w-full h-full" />
          <div class="projectInfo">
            <h3 class="text-center text-white">Your Next Project</h3>
            <p class="seeMore text-white underline">See more</p>
          </div>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>

<script>
  import { projects } from "~/constants/projects";

  export default {
    data() {
      return {
        projects: projects,
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
      const tiltNextProject = this.$refs[`tiltProjectDesktop${6}`];
      this.$vanillaTilt(tiltNextProject, {
        max: 20,
        speed: 600,
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
    overflow: hidden;
    cursor: grab;
    padding-right: 1.5rem;
  }

  .slideProject {
    height: 100%;
    background-color: #39385ef2;
    border-radius: 18px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    /* cursor: pointer; */
  }

  .slideProject img {
    object-fit: cover;
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

  .nextProject {
    width: max-content;
    height: max-content;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-lime);
    border-radius: 999px;
    cursor: pointer;
    margin: auto;
    padding: 0.5rem 1rem;
  }

  .nextProject h3 {
    color: var(--color-dark-violet) !important;
  }

  .projectInfo h3 {
    font-size: 1.125rem;
    text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
  }

  .projectInfo p {
    font-size: 0.75rem;
    text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
  }

  .slideProject .seeMore {
    opacity: 0;
    transition: all 0.3s ease;
  }

  .slideProject:hover .seeMore {
    opacity: 1;
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

    .swiperProjects {
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
      padding: 3.75rem 5.625rem;
    }

    h2 {
      padding: 0;
    }

    .projectsDesktop {
      width: 100%;
      height: 81rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      position: relative;
    }

    .projectsDesktop article {
      width: 11rem;
      height: 16rem;
      position: absolute;
      border-radius: 12px;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      will-change: transform;
      overflow: visible;
    }

    .projectsDesktop img {
      object-fit: cover;
      border-radius: 12px;
    }

    .projectsDesktop article:nth-child(1) {
      top: 5.063rem;
      left: 0;
    }
    .projectsDesktop article:nth-child(2) {
      top: 13.5rem;
      right: 0;
      left: 27%;
    }
    .projectsDesktop article:nth-child(3) {
      top: 2.313rem;
      right: 27%;
    }
    .projectsDesktop article:nth-child(4) {
      top: 8rem;
      right: 0;
    }
    .projectsDesktop article:nth-child(5) {
      top: 26rem;
      left: 0;
    }
    .projectsDesktop article:nth-child(6) {
      top: 34rem;
      left: 27%;
    }
    .projectsDesktop article:nth-child(7) {
      top: 24rem;
      right: 27%;
    }
    .projectsDesktop article:nth-child(8) {
      top: 30rem;
      right: 0;
    }
    .projectsDesktop article:nth-child(9) {
      top: 48rem;
      left: 0;
    }
    .projectsDesktop article:nth-child(10) {
      top: 56rem;
      left: 27%;
    }
    .projectsDesktop article:nth-child(11) {
      top: 44rem;
      right: 27%;
    }
    .projectsDesktop article:nth-child(12) {
      top: 52rem;
      right: 0;
    }

    .yourProject {
      position: relative;
      bottom: 0;
      right: 27%;
      cursor: pointer;
    }

    .yourProject h3 {
      color: var(--color-lime) !important;
      text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
    }

    .projectInfo {
      background-color: transparent;
    }

    .projectInfo {
      transform: translateZ(20px);
    }

    .projectInfo {
      height: 100%;
      align-items: flex-start;
      gap: 0.75rem;
      z-index: 1;
      top: 25%;
      left: 0;
    }

    .projectInfo h3 {
      max-width: 100%;
      text-align: start !important;
      position: relative;
      z-index: 2;
      font-size: 1.5rem;
      margin-left: -2.5rem;
    }

    .projectInfo p {
      text-align: start !important;
      font-size: 1rem;
    }
  }

  @media (width >= 1280px) {
    .projectsDesktop {
      height: 94rem;
    }

    .projectsDesktop article {
      width: 13rem;
      height: 18rem;
    }

    .projectsDesktop article:nth-child(5) {
      top: 30rem;
    }
    .projectsDesktop article:nth-child(6) {
      top: 38rem;
    }
    .projectsDesktop article:nth-child(7) {
      top: 28rem;
    }
    .projectsDesktop article:nth-child(8) {
      top: 34rem;
    }
    .projectsDesktop article:nth-child(9) {
      top: 56rem;
    }
    .projectsDesktop article:nth-child(10) {
      top: 64rem;
    }
    .projectsDesktop article:nth-child(11) {
      top: 52rem;
    }
    .projectsDesktop article:nth-child(12) {
      top: 60rem;
    }
  }

  @media (width >= 1440px) {
    .projectsDesktop {
      height: 105rem;
    }

    .projectsDesktop article {
      width: 15rem;
      height: 20rem;
    }

    .projectsDesktop article:nth-child(5) {
      top: 34rem;
    }
    .projectsDesktop article:nth-child(6) {
      top: 42rem;
    }
    .projectsDesktop article:nth-child(7) {
      top: 32rem;
    }
    .projectsDesktop article:nth-child(8) {
      top: 38rem;
    }
    .projectsDesktop article:nth-child(9) {
      top: 64rem;
    }
    .projectsDesktop article:nth-child(10) {
      top: 70rem;
    }
    .projectsDesktop article:nth-child(11) {
      top: 58rem;
    }
    .projectsDesktop article:nth-child(12) {
      top: 66rem;
    }
  }

  @media (width >= 1650px) {
    .projectsDesktop {
      height: 110rem;
    }

    .projectsDesktop article {
      width: 17rem;
      height: 22rem;
    }

    .projectsDesktop article:nth-child(10) {
      top: 74rem;
    }

    .projectsDesktop article:nth-child(11) {
      top: 60rem;
    }

    .projectsDesktop article:nth-child(12) {
      top: 69rem;
    }
  }

  @media (width >= 1920px) {
    .projectsDesktop {
      height: 122rem;
    }

    .projectsDesktop article {
      width: 19rem;
      height: 24rem;
    }

    .projectsDesktop article:nth-child(5) {
      top: 39rem;
    }
    .projectsDesktop article:nth-child(6) {
      top: 46rem;
    }
    .projectsDesktop article:nth-child(7) {
      top: 36rem;
    }
    .projectsDesktop article:nth-child(8) {
      top: 42rem;
    }
    .projectsDesktop article:nth-child(9) {
      top: 72rem;
    }
    .projectsDesktop article:nth-child(10) {
      top: 81rem;
    }
    .projectsDesktop article:nth-child(11) {
      top: 67rem;
    }
    .projectsDesktop article:nth-child(12) {
      top: 76rem;
    }
  }
</style>
