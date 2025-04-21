<template>
  <div class="w-full grid" ref="servicesContainer"
    :style="`grid-template-rows: repeat(${services.length}, var(--service-height))`">
    <div v-for="(service, index) in services" :key="index" class="h-full sticky top-[7.687rem] sm:top-24 md:top-44"
      :data-index="index" :ref="setServiceRef">
      <div
        class="w-full h-full flex flex-col justify-between gap-4 rounded-2xl overflow-hidden origin-top p-5 bg-gradient-to-r from-secondary to-lightSecondary service-inner">
        <div class="w-[11.75rem] shrink-0 mx-auto md:w-[13.75rem] md:self-end md:mx-0 flex flex-col items-center">
          <img class="w-full object-contain aspect-square" :src="`/images/home/${service.img}-Lime-Devs.webp`"
            :alt="service.alt" />
        </div>
        <div class="flex flex-col gap-3">
          <h3 class="text-lg md:text-xl font-semibold">{{ service.title }}</h3>
          <p class="leading-relaxed text-xs sm:text-sm">{{ service.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
});

const servicesContainer = ref(null);
const serviceRefs = ref([]);
const activeIndex = ref(0);

const setServiceRef = (el) => {
  if (el) {
    serviceRefs.value.push(el);
  }
};

onMounted(async () => {
  await nextTick();

  // Importa los módulos de aatjs sólo en el cliente
  if (process.client) {
    const { ScrollObserver, valueAtPercentage } = await import('aatjs');

    const serviceElements = serviceRefs.value;
    servicesContainer.value.style.setProperty(
      "--services-count",
      serviceElements.length
    );

    // Configuramos el ScrollObserver para animar las tarjetas
    serviceElements.forEach((service, index) => {
      const offsetTop = 20 + index * 20;
      service.style.paddingTop = `${offsetTop}px`;
      if (index === serviceElements.length - 1) {
        return;
      }

      const toScale = 1 - (serviceElements.length - 1 - index) * 0.1;
      const nextService = serviceElements[index + 1];
      const serviceInner = service.querySelector(".service-inner");

      ScrollObserver.Element(nextService, {
        offsetTop,
        offsetBottom: window.innerHeight - service.clientHeight,
      }).onScroll(({ percentageY }) => {
        serviceInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        });
        serviceInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`;

        if (percentageY > 0.5 && activeIndex.value !== index + 1) {
          activeIndex.value = index + 1;
        } else if (percentageY <= 0.5 && activeIndex.value !== index) {
          activeIndex.value = index;
        }
      });
    });
  }
});
</script>

<style scoped>
:root {
  --service-height: auto;
}
</style>