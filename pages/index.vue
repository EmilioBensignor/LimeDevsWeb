<template>
  <main>
    <HomeHero />
    <HomeServices id="services" />
    <HomeProjects id="projects" />
    <ClientOnly>
      <HomeAboutUs id="aboutUs" />
    </ClientOnly>
  </main>
</template>

<script setup>
definePageMeta({
  title: "Turning ideas into real products",
  description:
    "Innovating with custom software and hardware solutions to drive growth for startups and established businesses.",
});
</script>
