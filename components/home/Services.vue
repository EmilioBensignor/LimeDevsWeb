<template>
  <section class="w-full services columnAlignCenter">
    <h2 class="column">
      Solutions that drive your <span class="text-lime underline">growth.</span>
    </h2>
    <div class="servicesContainer"v-for="(service, index) in services" :key="index">
      <div class="bg-gradient-violet">
        {{ service.title }}
      </div>
    </div>
    <NuxtLink to="#" class="primaryButton">Get started</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          img: "",
          alt: "",
          title: "Technology Consulting",
          text: "",
        },
        {
          img: "",
          alt: "",
          title: "Software Development",
          text: "",
        },
        {
          img: "",
          alt: "",
          title: "Hardware Development",
          text: "",
        },
        {
          img: "",
          alt: "",
          title: "Support & Maintenance",
          text: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  padding: 2rem 1rem;
}

.servicesContainer {
  margin: 2rem 0 1.25rem 0;
}
</style>
