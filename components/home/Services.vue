<template>
  <section class="w-full services columnAlignCenter">
    <h2 class="column">
      Solutions that drive your <span class="text-lime underline">growth.</span>
    </h2>
    <client-only>
      <HomeScrollServicesCards :services="services" />
    </client-only>
    <NuxtLink to="#" class="primaryButton">Get started</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          img: "animacionHero",
          alt: "",
          title: "Technology Consulting",
          text: "We help you validate your business idea through a product discovery process and determine the right scope for your MVP.",
        },
        {
          img: "animacionHero",
          alt: "",
          title: "Software Development",
          text: "We design and build custom software tailored to your business needs. Whether it's a mobile app, web platform, or enterprise solution, we turn your vision into reality with scalable and efficient technology.",
        },
        {
          img: "animacionHero",
          alt: "",
          title: "Hardware Development",
          text: "From concept to prototype, we develop physical hardware solutions to enhance your products and operations. Our team specializes in creating reliable, innovative hardware that integrates seamlessly with your existing systems.",
        },
        {
          img: "animacionHero",
          alt: "",
          title: "Support & Maintenance",
          text: "We offer continuous support and maintenance to ensure your technology solutions run smoothly and efficiently. From troubleshooting to system updates, our team is here to help you minimize downtime and keep your business operations on track.",
        },
      ],
    };
  },
};
</script>
