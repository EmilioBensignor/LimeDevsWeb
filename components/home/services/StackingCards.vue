<template>
  <div class="w-full h-[21.5rem] lg:h-[22.5rem] 3xl:h-[25rem] flex justify-between items-center gap-[1.125rem]">
    <div
      class="max-w-[220px] lg:max-w-[240px] xl:max-w-[290px] 2xlmax-w-[340px] 3xl:max-w-[390px] w-[40%] flex flex-col gap-[0.625rem]">
      <button v-for="(service, index) in services" :key="index"
        class="relative z-[5] bg-secondary border-none rounded-full text-white text-[0.875rem] lg:text-base xl:text-xl 3xl:text-xl cursor-pointer transition-all duration-300 ease-in-out py-[0.875rem] px-[1.5rem] hover:shadow-[-4px_-2px_6px_0px_#7372B5_inset]"
        :class="{ 'font-bold bg-lightSecondary': activeIndex === index }"
        @click="toggleClass(index)">
        {{ service.title }}
      </button>
    </div>
    <div class="w-[60%] h-full flex justify-center relative">
      <div v-for="(service, index) in services" :key="index"
        class="w-[20.375rem] lg:w-[24rem] xl:w-[34rem] 3xl:w-[48.125rem] h-full flex flex-col items-center justify-end absolute rounded-[18px] overflow-hidden bg-gradient-to-br from-secondary to-lightSecondary shadow-xl will-change-transform origin-center p-[1.25rem] xl:p-[2rem] 3xl:p-[2.5rem]"
        :style="getCardStyle(index)">
        <div
          class="h-full absolute top-[1.125rem] xl:top-[2rem] 3xl:top-[2.5rem] right-[1.25rem] xl:right-[2rem] 3xl:right-[2.5rem] z-[2]">
          <NuxtImg :src="`/images/home/${service.img}-Lime-Devs.webp`" alt="service"
            class="w-[15.688rem] xl:w-[19.25rem] 3xl:w-[23.375rem] h-[55%] xl:h-[45%] 3xl:h-[55%] object-contain brightness-90" />
        </div>
        <div class="relative flex flex-col gap-[1rem] z-[2]">
          <h3 class="text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 3xl:text-[2rem] text-white font-semibold">{{ service.title }}
          </h3>
          <p class="text-[0.875rem] lg:text-base xl:text-xl 3xl:text-xl text-white">{{ service.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);

const toggleClass = (index) => {
  activeIndex.value = index;
};

const getCardStyle = (index) => {
  const isActive = activeIndex.value === index;
  const distanceFromActive = Math.abs(activeIndex.value - index);
  let zIndex, transform, rotateY, translateX, brightness;

  switch (distanceFromActive) {
    case 0:
      zIndex = 4;
      rotateY = "none";
      translateX = 0;
      brightness = 1;
      break;

    case 1:
      zIndex = 3;
      rotateY = `rotate(-12deg)`;
      translateX = "10px";
      brightness = 0.7;
      break;

    case 2:
      zIndex = 2;
      rotateY = `rotate(10deg)`;
      translateX = "-5px";
      brightness = 0.6;
      break;

    default:
      zIndex = 1;
      rotateY = `rotate(-5deg)`;
      translateX = "-10px";
      brightness = 0.5;
      break;
  }

  transform = isActive ? "none" : `translateX(${translateX}) ${rotateY}`;

  return {
    zIndex,
    transform,
    filter: `brightness(${brightness})`,
    transition: "all 0.5s ease",
  };
};
</script>