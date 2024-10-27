<template>
  <section id="outcome" class="outcome projectSection columnAlignCenter">
    <h2 class="w-full">Project Outcome</h2>
    <p class="text-center">{{ project.outcome }}</p>
    <Swiper
      :slides-per-view="1.3"
      :space-between="12"
      :scrollbar="true"
      class="swiperOutcome"
    >
      <SwiperSlide
        v-for="(projectOutcome, index) in project.outcomeImages"
        :key="index"
        class="slideOutcome"
      >
        <img
          :src="`/images/projects/${projectOutcome.img}`"
          :alt="projectOutcome.alt"
          class="w-full h-full"
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
  cursor: grab;
}

.slideOutcome {
  width: 100% !important;
  max-width: 12.5rem;
  height: 100%;
  background-color: #39385ef2;
  border-radius: 9px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.slideOutcome img {
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

:deep(.swiper-scrollbar) {
  bottom: -0.75rem;
  background: var(--color-lime);
}

@media (width >= 700px) {
  .outcome {
    gap: 1.25rem;
    padding: 0 3.75rem 3rem 3.75rem;
  }

  .outcome h2 {
    text-align: start !important;
  }

  .outcome > p:first-of-type {
    text-align: start !important;
    font-size: 1rem;
  }

  .swiperOutcome {
    height: 21.625rem;
  }

  .slideOutcome {
    max-width: 21.625rem;
  }
}

@media (width >= 1080px) {
  .outcome {
    gap: 1.75rem;
    padding: 0 5.625rem 0 0;
  }

  .outcome > p:first-of-type {
    font-size: 1.25rem;
  }

  .swiperOutcome {
    height: 31.25rem;
  }

  .slideOutcome {
    max-width: 31.25rem;
  }
}

@media (width >= 1440px) {
  .outcome > p:first-of-type {
    font-size: 1.5rem;
  }
}
</style>
