<template>
  <section class="bg-transparent">
    <div class="flex flex-col items-center relative z-[1]">
      <div class="w-full max-w-[1440px] flex flex-col items-center gap-5 lg:gap-10 py-8 px-6 md:pt-11 md:px-14 md:pb-14">
        <TitleH2 class="w-full text-center md:text-start">
          We are your partner in building
          <span class="text-primary underline">technological solutions.</span>
        </TitleH2>
        <div class="xl:hidden bg-gradient-to-r from-secondary to-lightSecondary rounded-[19px] md:rounded-[26px] p-5 md:p-6">
          <p class="text-center lg:text-xl">
            At Lime, we are a team with
            <span class="text-primary font-bold">expertise in both digital and physical products</span>, focused on
            solving
            the concrete, day-to-day challenges of your
            business.
          </p>
        </div>
      </div>

      <div v-if="isMobile" class="w-full accordionMobile pb-5" ref="mobileSection">
        <Accordion :value="0" class="w-full">
          <AccordionPanel :value="value.value" v-for="(value, index) in values" :key="index"
            @click="handleAccordionClick(index)">
            <AccordionHeader :class="value.class">
              <h3 class="text-[1.125rem] sm:text-xl font-bold">{{ value.title }}</h3>
            </AccordionHeader>
            <AccordionContent>
              <div class="flex flex-col items-center">
                <div class="sm:w-56">
                  <video class="bg-dark brightness-[0.99]" ref="mobileVideos" autoplay muted playsinline preload="auto"
                    poster="/images/home/Lime-Devs-Values.webp" width="100%" height="auto">
                    <source :src="`/videos/Lime-Devs-${value.title}-Product.webm`" type="video/webm" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
                <p v-html="value.text" class="text-center"></p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>

      <DefaultContent v-else class="w-full flex justify-between items-center md:pt-0 md:pr-15 md:pb-11 md:pl-0 xl:px-[3.75rem]">
        <div class="flex flex-col xl:flex-row">
          <div class="xl:w-[280px] 2xl:w-[350px] hidden xl:flex justify-center items-center relarive z-[2] bg-gradient-to-r from-lightSecondary to-secondary rounded-[32px] p-7" :class="values[selectedValue].border">
            <p class="lg:text-xl 2xl:text-2xl">
              At Lime, we are a team with
              <span class="text-primary font-bold">expertise in both digital and physical products</span>, focused on
              solving the concrete, day-to-day challenges of your
              business.
            </p>
          </div>

          <div class="flex flex-col justify-between gap-5 relative z-0 xl:-ml-16">
            <div v-for="(item, index) in values" :key="index" @click="setSelectedStep(index)"
              class="relative text-xl text-light font-bold transition-all duration-300 cursor-pointer rounded-r-[50px] py-4 pl-14 lg:px-28"
              :class="[
                selectedValue === index
                  ? 'bg-gradient-to-r from-secondary to-lightSecondary w-[19rem] lg:w-[21rem] '
                  : 'bg-gradient-to-r from-secondary60 to-secondary60 w-[16rem] lg:w-[18rem] px-15 lg:pl-28'
              ]">
              <h3>{{ item.title }}</h3>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col items-center">
          <div class="flex flex-col items-center md:gap-5" ref="desktopSection">
            <div ref="animationContainer"
              class="w-[12.813rem] lg:w-[15rem] xl:w-[17rem] 2xl:w-[19rem] 2xl:flex-row bg-dark overflow-hidden transform-[translateZ(0)] p-0">
              <video class="bg-dark brightness-[0.99]" :key="`desktop-video-${selectedValue}`" ref="desktopVideo"
                autoplay muted playsinline preload="auto" poster="/images/home/Lime-Devs-Values.webp" width="100%"
                height="auto">
                <source :src="`/videos/Lime-Devs-${values[selectedValue].title}-Product.webm`" type="video/webm" />
                Tu navegador no soporta el video.
              </video>
            </div>
            <p v-html="values[selectedValue].text" class="md:max-w-[280px] xl:max-w-[400px] text-center xl:text-xl"></p>
          </div>
        </div>
      </DefaultContent>
    </div>
  </section>
</template>

<script setup>
const selectedValue = ref(0);
const visibleIndex = ref(null);
const isMobile = ref(false);
const isDesktopSectionVisible = ref(false);

const mobileSection = ref(null);
const desktopSection = ref(null);
const desktopVideo = ref(null);
const mobileVideos = ref(null);
const animationContainer = ref(null);

let mobileObserver = null;
let desktopObserver = null;

const values = ref([
  {
    value: 0,
    title: "Innovation",
    text: "<p>We constantly explore <span class='font-bold text-primary'>new technologies</span> to develop <span class='font-bold text-primary'>creative solutions</span> that meet our clients' evolving needs.</p>",
    border: "borderInnovation",
  },
  {
    value: 1,
    title: "Collaboration",
    text: "We believe in working closely with our clients, understanding their challenges, and <span class='font-bold text-primary'>building solutions together.</span>",
    class: "rightHeader",
  },
  {
    value: 2,
    title: "Adaptability",
    text: "<p>We quickly adapt to the <span class='font-bold text-primary'>fast-changing technological landscape</span>, ensuring that our clients stay ahead.</p>",
  },
  {
    value: 3,
    title: "Excellence",
    text: "<p>We strive for the <span class='font-bold text-primary'>highest standards</span> in every project, ensuring <span class='font-bold text-primary'>quality</span> and <span class='font-bold text-primary'>scalability</span> in our solutions. to develop <span class='font-bold text-primary'>creative solutions</span> that meet our clients' evolving needs.</p>",
    class: "rightHeader",
    border: "borderExcellence",
  },
]);

const setSelectedStep = (index) => {
  if (selectedValue.value === index && !isMobile.value) {
    const video = desktopVideo.value;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => { });
    }
  } else {
    selectedValue.value = index;
  }
};

const handleAccordionClick = (index) => {
  visibleIndex.value = index;

  nextTick(() => {
    if (isMobile.value) {
      const videos = mobileVideos.value;
      if (Array.isArray(videos)) {
        videos.forEach((video) => {
          if (video) video.pause();
        });

        if (videos[index]) {
          videos[index].currentTime = 0;
          videos[index].play().catch(() => { });
        }
      } else if (videos) {
        videos.currentTime = 0;
        videos.play().catch(() => { });
      }
    }
  });
};

const handleResize = () => {
  isMobile.value = window.matchMedia("(max-width: 660px)").matches;
  setupObservers();
};

const setupObservers = () => {
  // Desconectar observadores existentes
  if (mobileObserver) mobileObserver.disconnect();
  if (desktopObserver) desktopObserver.disconnect();

  const options = {
    rootMargin: "0px",
    threshold: isMobile.value ? 0.2 : 0.3,
  };

  if (isMobile.value) {
    mobileObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (mobileVideos.value) {
            const videos = Array.isArray(mobileVideos.value)
              ? mobileVideos.value
              : [mobileVideos.value];

            videos.forEach((video) => {
              if (video) {
                video.currentTime = 0;
                if (video.closest(".p-accordionpanel-active")) {
                  video.play().catch(() => { });
                }
              }
            });
          }
        } else {
          // Pausar videos cuando no están en vista
          if (mobileVideos.value) {
            const videos = Array.isArray(mobileVideos.value)
              ? mobileVideos.value
              : [mobileVideos.value];

            videos.forEach((video) => {
              if (video) video.pause();
            });
          }
        }
      });
    }, options);

    if (mobileSection.value) {
      mobileObserver.observe(mobileSection.value);
    }
  } else {
    desktopObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isDesktopSectionVisible.value = entry.isIntersecting;
        if (entry.isIntersecting) {
          nextTick(() => {
            const video = desktopVideo.value;
            if (video) {
              video.currentTime = 0;
              video.play().catch(() => { });
            }
          });
        } else {
          const video = desktopVideo.value;
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        }
      });
    }, options);

    if (desktopSection.value) {
      desktopObserver.observe(desktopSection.value);
    }
  }
};

watch(selectedValue, () => {
  nextTick(() => {
    if (!isMobile.value && isDesktopSectionVisible.value) {
      const video = desktopVideo.value;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => { });
      }
    }
  });
});

watch(isDesktopSectionVisible, (isVisible) => {
  if (!isMobile.value) {
    const video = desktopVideo.value;
    if (video) {
      if (isVisible) {
        video.currentTime = 0;
        video.play().catch(() => { });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }
});

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
  setupObservers();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (mobileObserver) mobileObserver.disconnect();
  if (desktopObserver) desktopObserver.disconnect();
});
</script>

<style>
.accordionMobile .p-accordionpanel,
.accordionMobile .p-accordionheader,
.accordionMobile .p-accordionpanel:first-child>.p-accordionheader,
.accordionMobile .p-accordioncontent-content {
  border: none !important;
  box-sizing: border-box;
  transition: all 0.5s ease;
}

.accordionMobile .p-accordion {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.accordionMobile .p-accordionheader {
  width: 16.25rem;
  display: flex;
  justify-content: center;
  background: #39385e99;
  border-radius: 0 50px 50px 0 !important;
  transition: all 0.4s ease;
  padding: 0.5rem 3.75rem;
}

.accordionMobile .rightHeader {
  align-self: flex-end;
  border-radius: 50px 0 0 50px !important;
}

.accordionMobile .p-accordionpanel:not(.p-disabled).p-accordionpanel-active>.p-accordionheader {
  background: linear-gradient(90deg, #39385E, #7372B5);
}

.accordionMobile .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled)>.p-accordionheader:hover {
  background: #39385e99;
}

.accordionMobile .p-accordionpanel:not(.p-disabled).p-accordionpanel-active>.p-accordionheader:hover {
  background: linear-gradient(90deg, #39385E, #7372B5);
}

.accordionMobile .p-accordionheader-toggle-icon {
  visibility: hidden;
}

.accordionMobile .p-accordioncontent-content {
  padding: 0.75rem 1.875rem;
}

.accordionMobile .p-accordioncontent-content div {
  padding: 0.75rem 0;
}

.accordionMobile .p-accordioncontent-content div p {
  max-width: 320px;
  font-size: 0.875rem;
}

@media (width >=480px) {
  .accordionMobile .p-accordionheader {
    width: 22rem;
    padding: 0.75rem 4.5rem;
  }

  .accordionMobile .p-accordioncontent-content div p {
    max-width: 370px;
    font-size: 0.875rem;
  }
}

@media (width >=600px) {
  .accordionMobile .p-accordionheader {
    width: 24rem;
  }
}

@media (width >=700px) {
  .accordionMobile {
    display: none;
  }
}

@supports (-webkit-touch-callout: none) {
  .video {
    background-color: #1A1926;
  }
}
</style>

<style>
.borderInnovation {
  border-radius: 32px 0 32px 32px;
}

.borderExcellence {
  border-radius: 32px 32px 0 32px;
}
</style>