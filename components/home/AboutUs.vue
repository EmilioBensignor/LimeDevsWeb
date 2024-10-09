<template>
  <section class="w-full aboutUs columnAlignCenter">
    <div class="column gap-5">
      <h2>
        We are your partner in building
        <span class="text-lime underline">technological solutions.</span>
      </h2>
      <div class="atLime bg-gradient-violet">
        <p>
          At Lime, we are a team with
          <span class="text-lime font-bold"
            >expertise in both digital and physical products</span
          >, focused on solving the concrete, day-to-day challenges of your
          business.
        </p>
      </div>
    </div>
    <div class="w-full accordionMobile pb-5">
      <ClientOnly>
        <Accordion :value="0" class="w-full">
          <AccordionPanel
            :value="value.value"
            v-for="(value, index) in values"
            :key="index"
          >
            <AccordionHeader :class="value.class">
              <h3>{{ value.title }}</h3>
            </AccordionHeader>
            <AccordionContent>
              <div class="columnAlignCenter">
                <NuxtImg
                  :src="`/images/home/${value.img}.png`"
                  :alt="value.alt"
                />
                <p v-html="value.text" class="text-center"></p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </ClientOnly>
    </div>
    <div class="aboutDesktop">
      <div class="aboutContainer column">
        <div
          class="atLimeDesktop bg-gradient-light-violet"
          :class="values[selectedValue].border"
        >
          <p>
            At Lime, we are a team with
            <span class="text-lime font-bold"
              >expertise in both digital and physical products</span
            >, focused on solving the concrete, day-to-day challenges of your
            business.
          </p>
        </div>
        <div class="column">
          <div
            v-for="(item, index) in values"
            :key="index"
            @click="setSelectedStep(index)"
            :class="{ valueBtnActive: selectedValue === index }"
            class="valueBtn relative bg-blue-light-gradient"
          >
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>
      <ClientOnly>
        <div class="desktopContentPanel column">
          <div class="columnAlignCenter">
            <NuxtImg
              :src="`/images/home/${values[selectedValue].img}.png`"
              :alt="values[selectedValue].alt"
            />
            <p v-html="values[selectedValue].text" class="text-center"></p>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: 0,
      values: [
        {
          value: 0,
          img: "animacionHero",
          alt: "Innovation",
          title: "Innovation",
          text: "<p>We constantly explore <span class='font-bold text-lime'>new technologies</span> to develop <span class='font-bold text-lime'>creative solutions</span> that meet our clients' evolving needs.</p>",
          border: "borderInnovation",
        },
        {
          value: 1,
          img: "animacionHero",
          alt: "Collaboration",
          title: "Collaboration",
          text: "We believe in working closely with our clients, understanding their challenges, and <span class='font-bold text-lime'>building solutions together.</span>",
          class: "rightHeader",
        },
        {
          value: 2,
          img: "animacionHero",
          alt: "Adaptability",
          title: "Adaptability",
          text: "<p>We quickly adapt to the <span class='font-bold text-lime'>fast-changing technological landscape</span>, ensuring that our clients stay ahead.</p>",
        },
        {
          value: 3,
          img: "animacionHero",
          alt: "Excellence",
          title: "Excellence",
          text: "<p>We strive for the <span class='font-bold text-lime'>highest standards</span> in every project, ensuring <span class='font-bold text-lime'>quality</span> and <span class='font-bold text-lime'>scalability</span> in our solutions. to develop <span class='font-bold text-lime'>creative solutions</span> that meet our clients' evolving needs.</p>",
          class: "rightHeader",
          border: "borderExcellence",
        },
      ],
    };
  },
  methods: {
    setSelectedStep(index) {
      this.selectedValue = index;
    },
  },
};
</script>

<style>
.accordionMobile .p-accordionpanel,
.accordionMobile .p-accordionheader,
.accordionMobile .p-accordionpanel:first-child > .p-accordionheader,
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

.accordionMobile
  .p-accordionpanel:not(.p-disabled).p-accordionpanel-active
  > .p-accordionheader {
  background: linear-gradient(
    90deg,
    var(--color-violet),
    var(--color-light-violet)
  );
}

.accordionMobile
  .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled)
  > .p-accordionheader:hover {
  background: #39385e99;
}

.accordionMobile
  .p-accordionpanel:not(.p-disabled).p-accordionpanel-active
  > .p-accordionheader:hover {
  background: linear-gradient(
    90deg,
    var(--color-violet),
    var(--color-light-violet)
  );
}

.accordionMobile .p-accordionheader-toggle-icon {
  visibility: hidden;
}

.accordionMobile .p-accordioncontent-content {
  padding: 0.75rem 1.875rem;
}

.accordionMobile .p-accordioncontent-content div {
  gap: 1.25rem;
  padding: 0.75rem 0;
}

.accordionMobile .p-accordioncontent-content div p {
  max-width: 320px;
  font-size: 0.75rem;
}

@media (width >= 480px) {
  .accordionMobile .p-accordionheader {
    width: 22rem;
    padding: 0.75rem 4.5rem;
  }

  .accordionMobile .p-accordioncontent-content div p {
    max-width: 370px;
    font-size: 0.875rem;
  }
}

@media (width >= 600px) {
  .accordionMobile .p-accordionheader {
    width: 24rem;
  }
}

@media (width >= 700px) {
  .accordionMobile {
    display: none;
  }
}
</style>

<style scoped>
.aboutUs > div:first-of-type {
  padding: 2rem 1.5rem 1.25rem 1.5rem;
}

h3 {
  font-size: 1.125rem;
}

.atLime {
  border-radius: 19px;
  padding: 1.25rem;
}

.aboutDesktop,
.atLimeDesktop {
  display: none;
}

@media (width >= 480px) {
  h3 {
    font-size: 1.25rem;
  }
}

@media (width >= 700px) {
  .aboutUs > div:first-of-type {
    padding: 2.75rem 3.75rem 1.25rem 3.75rem;
  }

  h2 {
    text-align: start;
  }

  .atLime {
    border-radius: 26px;
    padding: 1.5rem;
  }

  .atLime p {
    text-align: center;
  }

  .aboutDesktop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.75rem 2.75rem 0;
  }

  .desktopContentPanel {
    width: 100%;
  }

  .desktopContentPanel p {
    max-width: 293px;
  }

  .aboutContainer > div:last-child {
    gap: 1.25rem;
  }

  .valueBtn {
    width: 17.5rem;
    background: linear-gradient(
      90deg,
      var(--color-60-violet),
      var(--color-60-violet)
    );
    border-radius: 0 50px 50px 0;
    color: var(--color-white);
    font-weight: 700;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.4s;
    padding: 1rem 3.75rem;
  }

  .valueBtnActive {
    width: 20.625rem;
    background: var(--gradient-violet-light);
    transition: all 0.4s;
  }

  .desktopContentPanel > div {
    gap: 1.25rem;
  }

  .desktopContentPanel img {
    width: 12.875rem;
  }

  .desktopContentPanel p {
    font-size: 0.875rem;
  }
}

@media (width >= 850px) {
  .atLime p {
    font-size: 1.25rem;
  }

  .desktopContentPanel p {
    font-size: 1rem;
  }
}

@media (width >= 1080px) {
  .aboutUs {
    padding: 3.75rem 5.625rem;
  }

  .aboutUs > div:first-of-type {
    width: 100%;
    padding: 0 0 2rem 0;
  }

  .aboutDesktop {
    gap: 3.5rem;
  }

  .aboutDesktop > div:first-of-type {
    width: 70%;
  }

  .aboutDesktop > div:last-of-type {
    width: 50%;
  }

  .atLime {
    display: none;
  }

  .aboutDesktop {
    padding: 0;
  }

  .atLimeDesktop {
    width: 20rem;
    display: block;
    position: relative;
    z-index: 1;
    transition: all 0.4s;
    border-radius: 32px;
    padding: 1.75rem;
  }

  .borderInnovation {
    border-radius: 32px 0 32px 32px;
  }

  .borderExcellence {
    border-radius: 32px 32px 0 32px;
  }

  .atLimeDesktop p {
    font-size: 1.5rem;
  }

  .aboutContainer {
    flex-direction: row;
  }

  .valueBtn {
    width: 15.313rem;
    position: relative;
    transition: all 0.4s;
    padding: 1rem 1.25rem 1rem 3.125rem;
    margin-left: -2rem;
  }

  .valueBtnActive {
    margin-left: 0;
  }

  .desktopContentPanel p {
    max-width: 272px;
    font-size: 1.125rem;
  }
}

@media (width >= 1280px) {
  .atLimeDesktop {
    width: 26rem;
    display: flex;
    align-items: center;
    padding: 2.25rem;
  }

  .valueBtn {
    width: 18rem;
    padding: 1rem 1.25rem 1rem 5rem;
  }
}

@media (width >= 1440px) {
  .atLimeDesktop {
    width: 33.75rem;
    padding: 2.5rem;
  }

  .atLimeDesktop p {
    font-size: 1.75rem;
  }

  .valueBtn {
    width: 19rem;
    padding: 1rem 5rem 1rem 5rem;
  }

  h3 {
    font-size: 1.625rem;
  }

  .desktopContentPanel p {
    max-width: 300px;
    font-size: 1.25rem;
  }
}

@media (width >= 1600px) {
  .valueBtn {
    width: 24rem;
    padding: 1rem 5rem 1rem 7rem;
    margin-left: -3rem;
  }

  .valueBtnActive {
    margin-left: 0;
  }
}

@media (width >= 1920px) {
  .atLimeDesktop {
    width: 40rem;
  }

  .desktopContentPanel > div {
    gap: 2.5rem;
  }

  .desktopContentPanel p {
    max-width: 100%;
    font-size: 1.375rem;
  }
}
</style>
