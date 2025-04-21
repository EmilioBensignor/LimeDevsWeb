<template>
  <DefaultSection>
    <DefaultContent class="flex flex-col items-center">
      <div class="w-full flex flex-col gap-8 md:gap-16 2xl:gap-28 3xl:gap-36">
        <div class="sticky top-[4.5rem] md:w-full md:static md:flex md:justify-between md:items-center">
          <TitleH2 class="md:block">
            Solutions that drive your
            <span class="text-primary font-extrabold underline">growth.</span>
          </TitleH2>
          <DefaultContact class="hidden md:inline">
            Get started
          </DefaultContact>
        </div>
        <div class="md:hidden">
          <ClientOnly>
            <HomeServicesScrollingCards :services="services" />
          </ClientOnly>
        </div>
        <div class="hidden md:block">
          <HomeServicesStackingCards :services="services" />
        </div>
      </div>
      <DefaultContact class="mt-5 md:hidden">
        Get started
      </DefaultContact>
    </DefaultContent>
  </DefaultSection>
</template>

<script setup>
const services = [
  {
    img: "Technology-Consulting",
    alt: "Technology Consulting Lime Devs",
    title: "Technology Consulting",
    text: "We help you validate your business idea through a product discovery process and determine the right scope for your MVP.",
  },
  {
    img: "Software-Development",
    alt: "Software Development Lime Devs",
    title: "Software Development",
    text: "We design and build custom software tailored to your business needs. Whether it's a mobile app, web platform, or enterprise solution, we turn your vision into reality with scalable and efficient technology.",
  },
  {
    img: "Hardware-Development",
    alt: "Hardware Development Lime Devs",
    title: "Hardware Development",
    text: "From concept to prototype, we develop physical hardware solutions to enhance your products and operations. Our team specializes in creating reliable, innovative hardware that integrates seamlessly with your existing systems.",
  },
  {
    img: "Support-Maintenance",
    alt: "Support & Maintenance Lime Devs",
    title: "Support & Maintenance",
    text: "We offer continuous support and maintenance to ensure your technology solutions run smoothly and efficiently. From troubleshooting to system updates, our team is here to help you minimize downtime and keep your business operations on track.",
  },
];
</script>

<style scoped>
@media (width >=1600px) {
  .services {
    padding-bottom: 8rem;
  }

  .services>div {
    gap: 10rem;
  }
}
</style>
