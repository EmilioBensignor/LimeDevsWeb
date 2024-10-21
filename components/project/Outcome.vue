<template>
  <section id="outcome" class="outcome columnAlignCenter">
    <h2>Project Outcome</h2>
    <p class="text-center">{{ project.outcome }}</p>
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
      class="swiperOutcome"
    >
      <SwiperSlide
        v-for="(projectOutcome, index) in project.outcomeImages"
        :key="index"
        class="slideOutcome"
      >
        <NuxtImg
          :src="`/images/projects/${projectOutcome.img}`"
          :alt="projectOutcome.alt"
        />
      </SwiperSlide>
    </Swiper>
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
};
</script>

<style scoped>
.outcome {
  gap: 0.75rem;
  padding: 0 1rem 2rem 1rem;
}

.outcome > p:first-of-type {
  font-size: 0.75rem;
}

.swiperOutcome {
  width: 100%;
  height: 17.5rem;
  position: relative;
  overflow: hidden;
  cursor: grab;
}

.slideOutcome {
  width: 100% !important;
  height: 100%;
  background-color: #39385ef2;
  border-radius: 9px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  margin-right: 0.75rem;
  cursor: pointer;
}

.slideOutcome img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.slideOutcome:hover img {
  transform: scale(1.05);
}

:deep(.swiper-wrapper) {
  display: flex;
  align-items: stretch;
}

:deep(.swiper-slide) {
  height: auto;
}
</style>
