<template>
  <div class="servicesWrapper">
    <div class="navServices column">
      <button
        v-for="(service, index) in services"
        class="navButton"
        :class="['navButton', { active: activeIndex === index }]"
        @click="toggleClass(index)"
        :key="index">
        {{ service.title }}
      </button>
    </div>
    <div class="servicesContainer">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service bg-gradient-violet shadow-4"
        :style="getCardStyle(index)">
        <div
          class="bgContain"
          :style="{ backgroundImage: `url(/images/home/${service.img}.png)` }">
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
            rotateY = `rotate(-10deg)`;
            translateX = "5px";
            brightness = 0.7;
            break;

          case 2:
            zIndex = 2;
            rotateY = `rotate(-25deg)`;
            translateX = "-5px";
            brightness = 0.6;
            break;

          default:
            zIndex = 1;
            rotateY = `rotate(-40deg)`;
            translateX = "0px";
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
    height: 18rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.125rem;
  }

  .navServices {
    width: 40%;
    gap: 0.625rem;
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
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .service {
    width: 17.75rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 1rem;
  }
</style>
