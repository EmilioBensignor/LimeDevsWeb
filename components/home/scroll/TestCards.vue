<template>
  <div class="servicesWrapper">
    <div class="sidebarNav" v-if="isTabletOrLarger" ref="sidebarNav">
      <button
        v-for="(service, index) in services"
        :key="`nav-${index}`"
        :class="['navButton', { active: activeIndex === index }]"
        @click="scrollToService(index)"
      >
        {{ service.title }}
      </button>
    </div>
    <div class="servicesContainer" ref="servicesContainer">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service"
        :data-index="index"
        :ref="setServiceRef"
      >
        <div class="serviceInner column bg-gradient-violet">
          <div class="serviceImageContainer columnAlignCenter">
            <img
              class="serviceImage"
              :src="`/images/home/${service.img}.png`"
              :alt="service.alt"
            />
          </div>
          <div class="serviceContent column">
            <h3 class="serviceTitle">{{ service.title }}</h3>
            <p class="serviceDescription">{{ service.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick, computed } from "vue";
import { useWindowSize } from "@vueuse/core";

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
    const { width } = useWindowSize();

    const isTabletOrLarger = computed(() => width.value >= 700);

    const setServiceRef = (el) => {
      if (el) {
        serviceRefs.value.push(el);
      }
    };

    const scrollToService = async (index) => {
      const currentIndex = activeIndex.value;

      // Si el índice es el mismo, no hacemos nada
      if (index === currentIndex) return;

      const servicesContainerEl = servicesContainer.value;
      const targetService = serviceRefs.value[index];

      // Verificar si la referencia al servicio está definida
      if (!targetService) return;

      // Esperar el siguiente ciclo de renderizado para asegurar que los refs están listos
      await nextTick();

      // Calcular la posición de desplazamiento hacia el servicio objetivo
      const targetTop = targetService.offsetTop;
      const currentTop = serviceRefs.value[currentIndex]?.offsetTop || 0;

      // Desplazarse suavemente solo si el servicio está en un índice mayor o menor
      if (index > currentIndex) {
        servicesContainerEl.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      } else if (index < currentIndex) {
        servicesContainerEl.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      }

      // Actualizar el índice activo después del scroll
      activeIndex.value = index;
    };

    onMounted(async () => {
      await nextTick();

      const handleScroll = () => {
        serviceRefs.value.forEach((service, index) => {
          const rect = service.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            activeIndex.value = index;
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
      });
    });

    return {
      servicesContainer,
      setServiceRef,
      activeIndex,
      isTabletOrLarger,
      scrollToService,
    };
  },
};
</script>

<style scoped>
.servicesWrapper {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
}

.sidebarNav {
  display: none;
  flex-direction: column;
  position: sticky;
  top: 7.687rem;
  height: fit-content;
  gap: 0.5rem;
  padding-top: 4.125rem;
}

.navButton {
  background: linear-gradient(
    90deg,
    var(--color-60-violet),
    var(--color-60-violet)
  );
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.875rem 1.5rem;
  color: var(--color-white);
  font-size: 0.875rem;
}

.navButton.active {
  font-weight: bold;
  background: var(--gradient-violet-light);
  color: var(--color-white);
}

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
