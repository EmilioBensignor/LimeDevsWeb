<template>
  <section class="w-full services columnAlignCenter">
    <div class="w-full column">
      <div class="headerServices">
        <h2>
          Solutions that drive your
          <span class="text-lime underline">growth.</span>
        </h2>
        <DefaultContact>
          Get started
        </DefaultContact>
      </div>
      <div class="servicesMobile">
        <client-only>
          <HomeServicesScrollingCards :services="services" />
        </client-only>
      </div>
      <div class="servicesDesktop">
        <HomeServicesStackingCards :services="services" />
      </div>
    </div>
    <NuxtLink to="#contactUs" class="primaryButton btnMobile">Get started</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
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
      ],
    };
  },
};
</script>

<style scoped>
.services {
  padding: 2rem 1.5rem;
}

.services>div {
  gap: 2rem;
}

.headerServices {
  position: sticky;
  top: 4.5rem;
}

.btnHeader {
  display: none;
}

.btnMobile {
  margin-top: 1.25rem;
}

.servicesDesktop {
  display: none;
}

@media (width >=700px) {
  .services {
    padding: 2.75rem 3.75rem;
  }

  .servicesMobile {
    display: none;
  }

  .servicesDesktop {
    display: block;
  }

  .services>div {
    gap: 4rem;
  }

  .headerServices {
    width: 100%;
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    display: block;
  }

  .btnMobile {
    display: none;
  }

  .btnHeader {
    display: inline;
  }
}

@media (width >=1080px) {
  .services {
    padding: 3.75rem 5.625rem;
  }

  .services>div {
    gap: 7rem;
  }
}

@media (width >=1440px) {
  .services>div {
    gap: 9rem;
  }
}

@media (width >=1600px) {
  .services {
    padding-bottom: 8rem;
  }

  .services>div {
    gap: 10rem;
  }
}
</style>
