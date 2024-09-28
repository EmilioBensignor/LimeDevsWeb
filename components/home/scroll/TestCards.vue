<template>
  <div class="services" ref="servicesContainer">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="service"
      :data-index="index"
      :ref="setServiceRef"
    >
      <div class="serviceInner">
        <div class="serviceImageContainer">
          <img class="serviceImage" :src="service.imageSrc" alt="" />
        </div>
        <div class="serviceContent">
          <h1 class="serviceTitle">{{ service.title }}</h1>
          <p class="serviceDescription">{{ service.description }}</p>
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
      servicesContainer.value.style.setProperty(
        "--service-height",
        `${serviceElements[0].clientHeight}px`
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
.service {
  position: sticky;
  top: 0;
}

.serviceInner {
  will-change: transform;
  background: white;
  border-radius: 14px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px hsla(265.3, 20%, 10%, 35%);
  transform-origin: center top;
}

.services {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(var(--services-count), var(--service-height));
  gap: 40px 0;
}

.serviceImageContainer {
  display: flex;
  width: 40%;
  flex-shrink: 0;
}

.serviceImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
}

.serviceContent {
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
}

.serviceTitle {
  padding: 0;
  margin: 0;
  font-size: 60px;
  font-weight: 600;
  color: #16263a;
}

.serviceDescription {
  line-height: 1.4;
  font-size: 24px;
  color: #16263a;
}

.space {
  height: 90vh;
}

.space--small {
  height: 40vh;
}

@media (max-width: 600px) {
  .serviceInner {
    flex-direction: column;
  }

  .serviceImageContainer {
    width: 100%;
  }

  .serviceImage {
    aspect-ratio: 16 / 9;
  }

  .serviceTitle {
    font-size: 32px;
  }

  .serviceDescription {
    font-size: 16px;
  }

  .serviceContent {
    padding: 30px 20px;
  }
}
</style>
