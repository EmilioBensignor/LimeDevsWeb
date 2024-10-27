<template>
  <section id="outcome" class="outcome projectSection columnAlignCenter">
    <h2 class="w-full">Project Outcome</h2>
    <p class="text-center">{{ project.outcome }}</p>
    <Swiper
      :modules="[SwiperScrollbar]"
      :slides-per-view="'auto'"
      :free-mode="true"
      :space-between="12"
      :scrollbar="{ draggable: true }"
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

<style>
  .swiperOutcome .swiper-scrollbar {
    bottom: 0;
    background: var(--color-white);
  }
  
  .swiperOutcome .swiper-scrollbar-drag {
    background: var(--color-lime,);
  }
</style>

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
  height: 18.5rem;
  cursor: grab;
  padding-bottom: 1rem;
}

.slideOutcome {
  width: auto;
  height: 100%;
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
    border-radius: 24px;
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
    height: 26rem;
  }

  .slideOutcome {
    border-radius: 50px;
  }
}

@media (width >= 1440px) {
  .outcome > p:first-of-type {
    font-size: 1.5rem;
  }
}
</style>
