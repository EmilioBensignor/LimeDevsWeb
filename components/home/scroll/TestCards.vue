<template>
  <div class="servicesWrapper">
    <div class="sidebarNav">
      <button
        v-for="(service, index) in services"
        :key="index"
        :class="['navButton', { active: activeIndex === index }]"
        @click="scrollToService(index)">
        {{ service.title }}
      </button>
    </div>
    <div class="containerCards">
      <ul id="servicesCards" class="servicesCards">
        <li
          v-for="(service, index) in services"
          :key="index"
          :class="`service${index}`"
          class="service"
          :style="`z-index: ${index}`"
          :id="`service${index}`">
          <div class="cardBody bg-gradient-violet">
            <div class="serviceImageContainer columnAlignCenter">
              <img
                class="serviceImage"
                :src="`/images/home/${service.img}.png`"
                :alt="service.alt" />
            </div>
            <div class="serviceContent column">
              <h3 class="serviceTitle text-white">{{ service.title }}</h3>
              <p class="serviceDescription text-white">{{ service.text }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      services: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeIndex: null, // Índice activo para los botones de la barra lateral
        observer: null, // Observador de intersección para detectar las secciones visibles
      };
    },
    mounted() {
      // Configuramos el IntersectionObserver cuando el componente se monta
      this.setupObserver();
    },
    beforeDestroy() {
      // Desconectar el observer para evitar fugas de memoria
      if (this.observer) {
        this.observer.disconnect();
      }
    },
    methods: {
      // Función para realizar scroll suave a una sección específica
      scrollToService(index) {
        const section = document.getElementById(`service${index}`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      },
      // Configuramos el IntersectionObserver para observar las secciones
      setupObserver() {
        const options = {
          root: null, // Vista actual (viewport)
          rootMargin: "0px",
          threshold: 0.5, // Cambia el índice activo cuando el 50% de la sección esté visible
        };

        this.observer = new IntersectionObserver(this.handleIntersect, options);

        // Observar cada sección de servicio
        const sections = document.querySelectorAll(".service");
        sections.forEach((section) => {
          this.observer.observe(section);
        });
      },
      // Manejador para cuando una sección es visible
      handleIntersect(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.id.replace("service", ""));
            this.activeIndex = index; // Actualizamos el botón activo en la barra lateral
          }
        });
      },
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
    text-align: center;
    color: var(--color-white);
    font-size: 0.875rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.875rem 1.5rem;
  }

  .navButton.active {
    background: linear-gradient(
      90deg,
      var(--color-violet),
      var(--color-light-violet)
    );
    color: var(--color-black);
  }

  .containerCards {
    width: 100%;
    margin: 0 auto;
  }

  .servicesCards {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    list-style: none;
    padding-left: 0;
    padding-bottom: 1.25rem;
  }

  .service {
    position: sticky;
    top: 7.5rem;
    padding-top: 1.5rem;
  }

  .service .cardBody {
    width: 100%;
    height: 18.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    border-radius: 18px;
    box-sizing: border-box;
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
    font-size: 0.75rem;
  }

  @media (width >= 700px) {
    .service {
      top: 11rem;
    }

    .sidebarNav {
      display: flex;
      width: 14rem;
    }

    .containerCards {
      width: 59%;
    }
  }
</style>
