<template>
  <div class="services" ref="servicesContainer">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="service"
      :data-index="index"
      :ref="setServiceRef">
      <div class="serviceInner column bg-gradient-violet">
        <div class="w-full serviceImageContainer columnAlignCenter">
          <img
            class="serviceImage"
            :src="`/images/home/${service.img}.png`"
            alt="" />
        </div>
        <div class="serviceContent column">
          <h3 class="serviceTitle">{{ service.title }}</h3>
          <p class="serviceDescription">{{ service.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, onMounted, nextTick } from "vue";
  import { ScrollObserver, valueAtPercentage } from "aatjs";

  export default {
    name: "ScrollingServices",
    props: {
      services: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const servicesContainer = ref(null);
      const serviceRefs = ref([]);

      const setServiceRef = (el) => {
        if (el) {
          serviceRefs.value.push(el);
        }
      };

      onMounted(async () => {
        await nextTick();

        const serviceElements = serviceRefs.value;
        servicesContainer.value.style.setProperty(
          "--services-count",
          serviceElements.length
        );

        serviceElements.forEach((service, index) => {
          const offsetTop = 20 + index * 20;
          service.style.paddingTop = `${offsetTop}px`;
          if (index === serviceElements.length - 1) {
            return;
          }
          const toScale = 1 - (serviceElements.length - 1 - index) * 0.1;
          const nextService = serviceElements[index + 1];
          const serviceInner = service.querySelector(".serviceInner");
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
          });
        });
      });

      return {
        servicesContainer,
        setServiceRef,
      };
    },
  };
</script>

<style scoped>
  .services {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(var(--services-count), var(--service-height));
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .service {
    height: 100%;
    position: sticky;
    top: 0;
  }

  .serviceInner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 18px;
    overflow: hidden;
    will-change: transform;
    transform-origin: center top;
    padding: 1.25rem;
  }

  .serviceImageContainer {
    width: 11.75rem;
    height: 10.25rem;
    flex-shrink: 0;
  }

  .serviceImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 1;
  }

  .serviceContent {
    gap: 0.75rem;
  }

  .serviceTitle {
    font-size: 1.125rem;
  }

  .serviceDescription {
    line-height: 1.4;
    font-size: 0.75rem;
  }
</style>
