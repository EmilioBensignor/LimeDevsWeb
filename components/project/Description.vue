<template>
  <div class="w-full flex flex-col items-center gap-8">
    <div id="theCompany" class="flex flex-col gap-3 md:gap-5 2xl:gap-[1.75rem]">
      <TitleH2>The Company</TitleH2>
      <p class="text-center text-xs md:text-base 2xl:text-xl">{{ project.company }}</p>
    </div>
    <div id="theChallenge" class="w-full flex flex-col gap-3 md:gap-5 2xl:gap-[1.75rem]">
      <TitleH2>The Challenge</TitleH2>
      <div class="w-full flex flex-col items-center gap-3 2xl:gap-6">
        <div
          v-for="(challenge, index) in project.challenges"
          :key="index"
          class="w-full flex items-center gap-3 bg-secondary60 rounded-[9px] py-2 px-3"
        >
          <div class="w-8 md:w-[3.125rem] 2xl:w-[3.25rem] h-8 md:h-[3.125rem] 2xl:h-[3.25rem] flex justify-center items-center bg-midSecondary rounded-full">
            <Icon :name="challenge.icon" class="text-primary md:!text-2xl 2xl:!text-[1.75rem]" />
          </div>
          <p class="text-xs md:text-base 2xl:text-xl">{{ challenge.text }}</p>
        </div>
      </div>
    </div>
    <div id="technologiesResources" class="w-full flex flex-col gap-3 md:gap-5 2xl:gap-[1.75rem]">
      <TitleH2>Technologies and Resources</TitleH2>
      <div class="flex flex-col gap-2 md:gap-3 2xl:gap-5">
        <div class="w-full flex flex-wrap justify-center md:justify-start gap-2 2xl:gap-3">
          <div
            v-for="(technology, index) in project.technologies"
            :key="index"
            class="flex items-center gap-2 md:gap-4 rounded-[5px] bg-secondary60 py-2 md:py-3 2xl:py-4 px-3 md:px-5 2xl:px-6"
          >
            <div
              class="w-6 md:w-8 2xl:w-9 h-6 md:h-8 2xl:h-9 rounded-full bg-cover bg-center bg-no-repeat"
              :style="{
                backgroundImage: `url(/images/projects/${technology.icon})`,
              }"
            ></div>
            <p class="text-xs md:text-base 2xl:text-xl">{{ technology.title }}</p>
          </div>
        </div>
        <div class="w-full flex flex-wrap justify-center md:justify-start gap-2 2xl:gap-3">
          <div
            v-for="(resource, index) in project.resources"
            :key="index"
            class="flex items-center gap-2 md:gap-4 rounded-[5px] bg-secondary60 py-2 md:py-3 2xl:py-4 px-3 md:px-5 2xl:px-6"
          >
            <div
              class="w-[1.875rem] md:w-10 2xl:w-11 h-6 md:h-8 2xl:h-9 bg-cover bg-center bg-no-repeat"
              :style="{
                backgroundImage: `url(/images/projects/${resource.icon})`,
              }"
            ></div>
            <p class="text-xs md:text-base 2xl:text-xl">{{ resource.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
