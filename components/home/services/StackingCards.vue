<template>
  <div class="servicesWrapper">
    <div class="navServices column">
      <button
        v-for="(service, index) in services"
        class="navButton"
        :class="['navButton', { active: activeIndex === index }]"
        @click="toggleClass(index)"
        :key="index"
      >
        {{ service.title }}
      </button>
    </div>
    <div class="servicesContainer">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service bg-gradient-violet shadow-4"
        :style="getCardStyle(index)"
      >
        <div>
          <NuxtImg :src="`/images/home/${service.img}.png`" alt="service" />
        </div>
        <div>
          <h3 class="serviceTitle">{{ service.title }}</h3>
          <p class="serviceDescription">{{ service.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StackingServices",
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    toggleClass(index) {
      this.activeIndex = index;
    },
    getCardStyle(index) {
      const isActive = this.activeIndex === index;
      const distanceFromActive = Math.abs(this.activeIndex - index);
      let zIndex, transform, rotateY, translateX, brightness;

      switch (distanceFromActive) {
        case 0:
          zIndex = 4;
          rotateY = "none";
          translateX = 0;
          brightness = 1;
          break;

        case 1:
          zIndex = 3;
          rotateY = `rotate(-15deg)`;
          translateX = "10px";
          brightness = 0.7;
          break;

        case 2:
          zIndex = 2;
          rotateY = `rotate(10deg)`;
          translateX = "-5px";
          brightness = 0.6;
          break;

        default:
          zIndex = 1;
          rotateY = `rotate(-5deg)`;
          translateX = "-10px";
          brightness = 0.5;
          break;
      }

      transform = isActive ? "none" : `translateX(${translateX}) ${rotateY}`;

      return {
        zIndex,
        transform,
        filter: `brightness(${brightness})`,
        transition: "all 0.5s ease",
      };
    },
  },
};
</script>

<style scoped>
.servicesWrapper {
  width: 100%;
  height: 21.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.125rem;
}

.navServices {
  max-width: 220px;
  width: 40%;
  gap: 0.625rem;
}

.navButton {
  position: relative;
  z-index: 5;
  background: linear-gradient(
    90deg,
    var(--color-60-violet),
    var(--color-60-violet)
  );
  border: none;
  border-radius: 9999px;
  color: var(--color-white);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.875rem 1.5rem;
}

.navButton:hover {
  box-shadow: -4px -2px 6px 0px #7372B5 inset;
}

.navButton.active {
  font-weight: bold;
  background: var(--gradient-violet-light);
  color: var(--color-white);
}

.servicesContainer {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.service {
  width: 20.375rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: absolute;
  border-radius: 18px;
  overflow: hidden;
  will-change: transform;
  transform-origin: center center;
  padding: 1.25rem;
}

.service.active {
  z-index: 4;
  transform: none;
}

.service > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service > div:first-of-type {
  height: 100%;
  position: absolute;
  top: 1.125rem;
  right: 1.25rem;
}

.service > div:first-of-type > img {
  width: 15.688rem;
  height: 55%;
}

.serviceTitle {
  font-size: 1.25rem;
}

.serviceDescription {
  font-size: 0.875rem;
}

@media (width >= 850px) {
  .navServices {
    max-width: 240px;
  }

  .navButton {
    font-size: 1rem;
  }

  .service {
    width: 24rem;
  }

  .serviceTitle {
    font-size: 1.5rem;
  }

  .serviceDescription {
    font-size: 1rem;
  }
}

@media (width >= 1080px) {
  .servicesWrapper {
    height: 22.5rem;
  }

  .navServices {
    max-width: 290px;
  }

  .navButton {
    font-size: 1.125rem;
  }

  .service {
    width: 36.25rem;
    padding: 2rem;
  }

  .service > div:first-of-type {
    top: 2rem;
    right: 2rem;
  }

  .service > div:first-of-type > img {
    width: 19.25rem;
    height: 45%;
  }

  .serviceTitle {
    font-size: 1.75rem;
  }

  .serviceDescription {
    font-size: 1.125rem;
  }
}

@media (width >= 1280px) {
  .navServices {
    max-width: 340px;
  }
}

@media (width >=1440px) {
  .servicesWrapper {
    height: 25rem;
  }

  .navServices {
    max-width: 390px;
  }

  .navButton {
    font-size: 1.25rem;
  }

  .service {
    width: 48.125rem;
    padding: 2.5rem;
  }

  .service > div:first-of-type {
    top: 2.5rem;
    right: 2.5rem;
  }

  .service > div:first-of-type > img {
    width: 23.375rem;
    height: 55%;
  }

  .serviceTitle {
    font-size: 2rem;
  }

  .serviceDescription {
    font-size: 1.25rem;
  }
}

@media (width >=1600px) {
  .navServices {
    max-width: 420px;
  }

  .service {
    width: 55rem
  }
}

@media (width >=1920px) {
  .navServices {
    max-width: 500px;
  }

  .navButton {
    font-size: 1.375rem;
  }

  .service {
    width: 55rem
  }
}
</style>
