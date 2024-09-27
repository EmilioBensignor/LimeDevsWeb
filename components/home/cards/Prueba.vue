<template>
  <div class="cards" ref="cardsContainer">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      :data-index="index"
      :ref="setCardRef">
      <div class="card__inner">
        <div class="card__image-container">
          <img class="card__image" :src="card.imageSrc" alt="" />
        </div>
        <div class="card__content">
          <h1 class="card__title">{{ card.title }}</h1>
          <p class="card__description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, onMounted, nextTick } from "vue";
  import { ScrollObserver, valueAtPercentage } from "aatjs";

  export default {
    name: "ScrollingCards",
    props: {
      cards: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const cardsContainer = ref(null);
      const cardRefs = ref([]);

      const setCardRef = (el) => {
        if (el) {
          cardRefs.value.push(el);
        }
      };

      onMounted(async () => {
        await nextTick();

        const cardElements = cardRefs.value;
        cardsContainer.value.style.setProperty(
          "--cards-count",
          cardElements.length
        );
        cardsContainer.value.style.setProperty(
          "--card-height",
          `${cardElements[0].clientHeight}px`
        );

        cardElements.forEach((card, index) => {
          const offsetTop = 20 + index * 20;
          card.style.paddingTop = `${offsetTop}px`;
          if (index === cardElements.length - 1) {
            return;
          }
          const toScale = 1 - (cardElements.length - 1 - index) * 0.1;
          const nextCard = cardElements[index + 1];
          const cardInner = card.querySelector(".card__inner");
          ScrollObserver.Element(nextCard, {
            offsetTop,
            offsetBottom: window.innerHeight - card.clientHeight,
          }).onScroll(({ percentageY }) => {
            cardInner.style.scale = valueAtPercentage({
              from: 1,
              to: toScale,
              percentage: percentageY,
            });
            cardInner.style.filter = `brightness(${valueAtPercentage({
              from: 1,
              to: 0.6,
              percentage: percentageY,
            })})`;
          });
        });
      });

      return {
        cardsContainer,
        setCardRef,
      };
    },
  };
</script>

<style scoped>
  /* Aquí va todo el CSS que proporcionaste */
  * {
    box-sizing: border-box;
  }

  body {
    background: hsl(265.3, 10%, 75%);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .card {
    position: sticky;
    top: 0;
  }

  .card__inner {
    will-change: transform;
    background: white;
    border-radius: 14px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px hsla(265.3, 20%, 10%, 35%);
    transform-origin: center top;
  }

  .cards {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(var(--cards-count), var(--card-height));
    gap: 40px 0;
  }

  .card__image-container {
    display: flex;
    width: 40%;
    flex-shrink: 0;
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  }

  .card__content {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
  }

  .card__title {
    padding: 0;
    margin: 0;
    font-size: 60px;
    font-weight: 600;
    color: #16263a;
  }

  .card__description {
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
    .card__inner {
      flex-direction: column;
    }

    .card__image-container {
      width: 100%;
    }

    .card__image {
      aspect-ratio: 16 / 9;
    }

    .card__title {
      font-size: 32px;
    }

    .card__description {
      font-size: 16px;
    }

    .card__content {
      padding: 30px 20px;
    }
  }
</style>
