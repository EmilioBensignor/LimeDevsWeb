<template>
  <section class="w-full description columnAlignCenter">
    <div id="theCompany" class="projectSection company column">
      <h2>The Company</h2>
      <p class="text-center">{{ project.company }}</p>
    </div>
    <div id="theChallenge" class="w-full projectSection column">
      <h2>The Challenge</h2>
      <div class="w-full challenges columnAlignCenter">
        <div
          v-for="(challenge, index) in project.challenges"
          :key="index"
          class="w-full challenge rowCenter bg-violet-60"
        >
          <div class="allCenter bg-mid-violet">
            <Icon :name="challenge.icon" class="text-lime" />
          </div>
          <p>{{ challenge.text }}</p>
        </div>
      </div>
    </div>
    <div id="technologiesResources" class="w-full projectSection column">
      <h2>Technologies and Resources</h2>
      <div class="technologiesResources column">
        <div class="w-full technologies">
          <div
            v-for="(technology, index) in project.technologies"
            :key="index"
            class="technology rowCenter bg-violet-60"
          >
            <div
              class="bgContain"
              :style="{
                backgroundImage: `url(/images/projects/${technology.icon})`,
              }"
            ></div>
            <p>{{ technology.title }}</p>
          </div>
        </div>
        <div class="w-full resources">
          <div
            v-for="(resource, index) in project.resources"
            :key="index"
            class="resource rowCenter bg-violet-60"
          >
            <div
              class="bgContain"
              :style="{
                backgroundImage: `url(/images/projects/${resource.icon})`,
              }"
            ></div>
            <p>{{ resource.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.description {
  gap: 2rem;
  padding: 2rem 1rem;
}

.description > div {
  gap: 0.75rem;
}

.company p {
  font-size: 0.75rem;
}

.challenges {
  gap: 0.75rem;
}

.challenge {
  gap: 0.75rem;
  border-radius: 9px;
  padding: 0.5rem 0.75rem;
}

.challenge > div {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
}

.challenge p {
  font-size: 0.75rem;
}

.technologiesResources {
  gap: 0.5rem;
}

.technologies,
.resources {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.technology,
.resource {
  gap: 0.5rem;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
}

.technology div {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
}

.resource div {
  width: 1.875rem;
  height: 1.5rem;
}

.technology p,
.resource p {
  font-size: 0.75rem;
}

@media (width >= 700px) {
  .description {
    gap: 0;
    padding: 0 3.75rem;
  }

  .description h2 {
    text-align: start;
  }

  .description > div {
    gap: 1.25rem;
    padding-bottom: 3rem;
  }

  .company p {
    text-align: start !important;
    font-size: 1rem;
  }

  .challenge {
    gap: 1.25rem;
    padding: 0.75rem 1.25rem;
  }

  .challenge p {
    font-size: 1.375rem;
  }

  .challenge div {
    width: 3.125rem;
    height: 3.125rem;
  }

  .challenge div span {
    font-size: 1.5rem !important;
  }

  .technologies, .resources {
    justify-content: flex-start;
  }

  .technology, .resource {
    gap: 1rem;
    padding: 0.75rem 1.25rem;
  }
}
</style>
