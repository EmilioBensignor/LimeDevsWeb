<template>
  <section class="w-full aboutUs columnAlignCenter">
    <div class="column gap-5">
      <h2 class="column">
        We are your partner in building
        <span class="text-lime underline">technological solutions.</span>
      </h2>
      <div class="atLime bg-gradient-violet">
        <p>
          At Lime, we are a team with
          <span class="text-lime"
            >expertise in both digital and physical products</span
          >, focused on solving the concrete, day-to-day challenges of your
          business.
        </p>
      </div>
    </div>
    <div class="w-full accordionMobile pb-5">
      <ClientOnly>
        <Accordion value="0" class="w-full">
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          value: 0,
          img: "animacionHero",
          alt: "Innovation",
          title: "Innovation",
          text: "<p>We constantly explore <span class='text-lime'>new technologies</span> to develop <span class='text-lime'>creative solutions</span> that meet our clients' evolving needs.</p>",
        },
        {
          value: 1,
          img: "animacionHero",
          alt: "Collaboration",
          title: "Collaboration",
          text: "We believe in working closely with our clients, understanding their challenges, and <span class='text-lime'>building solutions together.</span>",
          class: "rightHeader",
        },
        {
          value: 2,
          img: "animacionHero",
          alt: "Adaptability",
          title: "Adaptability",
          text: "<p>We quickly adapt to the <span class='text-lime'>fast-changing technological landscape</span>, ensuring that our clients stay ahead.</p>",
        },
        {
          value: 3,
          img: "animacionHero",
          alt: "Excellence",
          title: "Excellence",
          text: "<p>We strive for the <span class='text-lime'>highest standards</span> in every project, ensuring <span class='text-lime'>quality</span> and <span class='text-lime'>scalability</span> in our solutions. to develop <span class='text-lime'>creative solutions</span> that meet our clients' evolving needs.</p>",
          class: "rightHeader",
        },
      ],
    };
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
  background: #39385e99;
  border-radius: 0 50px 50px 0 !important;
  transition: all 0.3s ease;
  padding: 0.5rem 3.75rem;
}

.accordionMobile .rightHeader {
  align-self: flex-end;
  border-radius: 50px 0 0 50px !important;
}

.accordionMobile
  .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled)
  > .p-accordionheader:hover,
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
  .p-accordionpanel:not(.p-disabled).p-accordionpanel-active
  > .p-accordionheader:hover {
  background: #39385e99;
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
  font-size: 0.75rem;
}
</style>

<style scoped>
.aboutUs > div:first-of-type {
  padding: 2rem 1rem 1.25rem 1rem;
}

h3 {
  font-size: 1.125rem;
}

.atLime {
  border-radius: 19px;
  padding: 1.25rem;
}
</style>
