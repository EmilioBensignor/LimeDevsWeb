<template>
  <div class="containerCards">
    <ul id="servicesCards" class="servicesCards">
      <li
        v-for="(service, index) in services"
        :key="index"
        :class="`service${index}`"
        class="service"
        :style="`z-index: ${index}`"
        :id="`service${index}`">
        <div class="cardBody">
          <h3 class="serviceTitle">
            {{ service.title }}
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ScrollingServicesTest",
    props: {
      services: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>
  :root {
    --cards: 4;
    --cardHeight: 87vh;
    --cardTopPadding: 1.5em;
    --cardMargin: 4vw;
  }

  .containerCards {
    width: 90%;
    margin: 0 auto;
  }

  .servicesCards {
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 87vw);
    gap: var(--cardMargin);
    padding-bottom: calc(var(--cards) * var(--cardTopPadding));
    margin-bottom: var(--cardMargin);
  }

  .service {
    position: sticky;
    top: 7.687rem;
    padding-top: calc(var(--index) * 1.5em);
  }

  #service0 {
    --index: 1;
    color: black;
  }

  #service1 {
    --index: 2;
    color: white;
  }

  #service2 {
    --index: 3;
    color: yellow;
  }

  #service3 {
    --index: 4;
    color: green;
  }

  .service .cardBody {
    padding: 30px;
    box-sizing: border-box;
    border-radius: 50px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    height: 87vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service0 .cardBody {
    background-color: red;
  }

  .service1 .cardBody {
    background-color: blue;
  }

  .service2 .cardBody {
    background-color: green;
  }

  .service3 .cardBody {
    background-color: yellow;
  }

  .serviceTitle {
    font-size: 1.125rem;
  }
</style>
