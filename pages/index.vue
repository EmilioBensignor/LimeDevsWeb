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
useSeoMeta({
  title: "Turning ideas into real tech solutions | Lime Devs",
  description: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
  ogTitle: "Turning ideas into real tech solutions | Lime Devs",
  ogDescription: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
  ogImage: "/images/Lime-Devs-Logo.svg",
  ogType: "website",
  ogUrl: "https://limedevs.com",
  twitterTitle: "Turning ideas into real tech solutions | Lime Devs",
  twitterDescription: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
  twitterImage: "/images/Lime-Devs-Logo.svg",
  twitterCard: 'summary_large_image',
});

useSchemaOrg([
  defineWebPage({
    name: "Turning ideas into real tech solutions | Lime Devs",
    description: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
    image: "/images/Lime-Devs-Logo.svg",
  }),
  {
    '@type': 'CreativeWork',
    name: "Turning ideas into real tech solutions | Lime Devs",
    description: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
    image: "/images/Lime-Devs-Logo.svg",
    author: {
      '@type': 'Organization',
      name: 'Lime Devs',
      url: 'https://limedevs.com'
    },
    headline: "Turning ideas into real tech solutions | Lime Devs",
    datePublished: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Lime Devs',
      logo: {
        '@type': 'ImageObject',
        url: '/images/Lime-Devs-Logo.svg'
      }
    }
  }
]);
</script>