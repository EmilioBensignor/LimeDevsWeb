<template>
  <div class="servicesContainer" ref="servicesContainer">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="service"
      :data-index="index"
      :ref="setServiceRef">
      <div class="serviceInner column bg-gradient-violet">
        <div class="serviceImageContainer columnAlignCenter">
          <img
            class="serviceImage"
            :src="`/images/home/${service.img}.png`"
            :alt="service.alt" />
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
      const activeIndex = ref(0);

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

        // Configuramos el ScrollObserver para animar las tarjetas
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

            if (percentageY > 0.5 && activeIndex.value !== index + 1) {
              activeIndex.value = index + 1;
            } else if (percentageY <= 0.5 && activeIndex.value !== index) {
              activeIndex.value = index;
            }
          });
        });
      });

      return {
        servicesContainer,
        setServiceRef,
        activeIndex,
      };
    },
  };
</script>

<style scoped>
  .servicesContainer {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(var(--services-count), var(--service-height));
  }

  .service {
    height: 100%;
    position: sticky;
    top: 7.687rem;
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
    flex-shrink: 0;
    margin: 0 auto;
  }

  .serviceImage {
    width: 100%;
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

  @media (width >= 349px) {
    .service {
      top: 6rem;
    }
  }

  @media (width >= 480px) {
    .serviceImageContainer {
      width: 13.75rem;
      align-self: flex-end;
      margin: 0;
    }

    .serviceTitle {
      font-size: 1.25rem;
    }

    .serviceDescription {
      font-size: 0.875rem;
    }
  }

  @media (width >= 700px) {
    .service {
      top: 11rem;
    }

    .sidebarNav {
      display: flex;
      width: 14rem;
    }

    .servicesContainer {
      width: 59%;
    }
  }
</style>
