<template>
  <section
    id="mainCharacteristics"
    class="flex flex-col items-center gap-3 md:gap-5"
  >
    <div class="w-full flex flex-col items-center">
      <div class="w-full bg-secondary rounded-t-[18px] md:rounded-t-[26px] p-3">
        <TitleH2 class="text-center">{{ project.phrase }}</TitleH2>
      </div>
      <NuxtImg
        :src="`/images/projects/${project.banner}`"
        :alt="project.altBanner"
        class="w-full h-full 2xl:max-h-[22.188rem] 3xl:max-h-[25rem] 2xl:object-cover rounded-b-[18px] md:rounded-b-[26px] xl:rounded-b'[50px]"
      />
    </div>
    <div class="w-full flex flex-wrap justify-center gap-[0.375rem] 2xl:gap-3">
      <div class="bg-secondary rounded-[5px] py-1 2xl:py-3 px-2 2xl:px-4">
        <p class="text-primary font-bold 2xl:text-[1.375rem] 3xl:text-2xl">{{ project.service }}</p>
      </div>
      <div class="bg-secondary rounded-[5px] py-1 2xl:py-3 px-2 2xl:px-4">
        <p class="text-primary font-bold 2xl:text-[1.375rem] 3xl:text-2xl">{{ project.years }}</p>
      </div>
      <div class="bg-secondary rounded-[5px] py-1 2xl:py-3 px-2 2xl:px-4">
        <p class="text-primary font-bold 2xl:text-[1.375rem] 3xl:text-2xl">{{ project.country }}</p>
      </div>
    </div>
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