<template>
  <section class="services" ref="servicesContainer">
    <h2>Solutions that drive your <span class="text-lime">growth.</span></h2>
    <div class="w-full serviceSection">
      <article
        class="w-full service relative bg-gradient-violet"
        v-for="(service, index) in services"
        :ref="
          (el) => {
            if (el) serviceSections[index] = el;
          }
        "
        :key="index">
        <div
          class="bgCover"
          :style="{
            backgroundImage: `url('/images/home/${service.img}.png')`,
          }"></div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.text }}</p>
      </article>
    </div>
  </section>
</template>

<script>
  // import { gsap } from "gsap";
  // import { ScrollTrigger } from "gsap/ScrollTrigger";

  export default {
    data() {
      return {
        services: [
          {
            img: "animacionHero",
            alt: "",
            title: "Technology Consulting",
            text: "We help you validate your business idea through a product discovery process.",
          },
          {
            img: "animacionHero",
            alt: "",
            title: "Software Development",
            text: "We design and build custom software tailored to your business needs.",
          },
          {
            img: "animacionHero",
            alt: "",
            title: "Hardware Development",
            text: "We develop physical hardware solutions to enhance your products.",
          },
          {
            img: "animacionHero",
            alt: "",
            title: "Support & Maintenance",
            text: "We offer continuous support and maintenance.",
          },
        ],
        serviceSections: [],
      };
    },
    // mounted() {
    //   gsap.registerPlugin(ScrollTrigger);
    //   this.$nextTick(() => {
    //     this.setupScrollAnimation();
    //   });
    // },
    // methods: {
    //   setupScrollAnimation() {
    //     this.serviceSections.forEach((section, index) => {
    //       gsap.to(section, {
    //         scrollTrigger: {
    //           trigger: section,
    //           start: "top 80%",
    //           end: "bottom 60%",
    //           scrub: true,
    //         },
    //         // Usamos transformaciones 3D
    //         transform: "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1)",
    //         ease: "power1.out",
    //       });
    //     });
    //   },
    // },
  };
</script>

<style scoped>
  .services {
    overflow: hidden;
    position: relative;
  }

  .serviceSection {
    display: flex;
    flex-direction: column;
  }

  .service {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .bgCover {
    width: 11.75rem;
    height: 10.25rem;
    background-size: cover;
    background-position: center;
  }

  .service h3 {
    margin: 1rem 0 0.75rem 0;
  }
</style>
