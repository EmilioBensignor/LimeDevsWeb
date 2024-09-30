<template>
  <footer class="bg-violet-60">
    <section class="column gap-5 ">
      <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" />
      <div>
        <h2>
          Ready to
          <span class="text-lime underline">transform your business</span>?
        </h2>
        <Stepper value="1">
          <StepList>
            <Step v-for="step in 4" :key="step" :value="step"></Step>
          </StepList>
        </Stepper>
      </div>
      <div class="socialMedia column">
        <p>Or contact us at:</p>
        <ul class="column">
          <li
            v-for="(social, index) in socialMedia"
            :key="index"
            class="rowCenter"
          >
            <div class="bgCover" :class="social.img"></div>
            <p>{{ social.text }}</p>
          </li>
        </ul>
      </div>
    </section>
    <div class="rightsReserved bg-dark-violet">
      <p class="text-center">© Lime Devs. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          link: "#",
          img: "whatsAppIcon",
          text: "+54 9 11 1111 1111",
        },
        {
          link: "#",
          img: "emailIcon",
          text: "hola@limedevs.com",
        },
        {
          link: "#",
          img: "linkedInIcon",
          text: "limedevs",
        },
      ],
    };
  },
};
</script>

<style scoped>
footer > section {
  padding: 2rem 1rem;
}

footer > section > img:first-of-type {
  width: 3.75rem;
}

.socialMedia {
  gap: 0.75rem;
}

.socialMedia p {
  font-size: 0.875rem;
}

.socialMedia ul {
  gap: 0.75rem;
}

.socialMedia ul li {
  gap: 0.75rem;
}

.socialMedia ul li div {
  width: 1.125rem;
  height: 1.125rem;
}

.whatsAppIcon {
  background-image: url("/images/footer/WhatsApp-Icon.svg");
}

.emailIcon {
  background-image: url("/images/footer/Email-Icon.svg");
}

.linkedInIcon {
  background-image: url("/images/footer/LinkedIn-Icon.svg");
}

.rightsReserved {
  padding: 1.25rem;
}

.rightsReserved p {
  font-size: 0.75rem;
}
</style>
