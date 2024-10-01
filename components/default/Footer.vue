<template>
  <footer id="contactUs" class="bg-violet-60">
    <section class="column gap-5">
      <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" />
      <div class="column gap-4">
        <h2>
          Ready to
          <span class="text-lime underline">transform your business</span>?
        </h2>
        <div class="stepperFooter">
          <Stepper :value="1">
            <StepList>
              <Step
                v-for="step in steps"
                :key="step.value"
                :value="step.value"
              ></Step>
            </StepList>
            <StepPanels>
              <form @submit.prevent="handleSubmit">
                <StepPanel
                  v-for="step in steps"
                  :key="step.value"
                  :value="step.value"
                  v-slot="{ activateCallback }"
                >
                  <div class="stepContent column">
                    <div>
                      <label :for="step.id" v-html="step.label"></label>
                      <component
                        :is="step.id === 'idea' ? 'textarea' : 'input'"
                        v-model="formData[step.id]"
                        :id="step.id"
                        :type="step.type"
                        :placeholder="step.placeholder"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="mt-3">
                    <div
                      v-if="step.value === 1"
                      class="w-full flex justify-content-end"
                    >
                      <Button class="next" @click="activateCallback(2)">
                        <Icon name="mingcute:arrow-right-line" />
                      </Button>
                    </div>
                    <div v-if="step.value === 2" class="w-full rowSpaceBetween">
                      <Button class="back" @click="activateCallback(1)">
                        <Icon name="mingcute:arrow-left-line" />
                      </Button>
                      <Button class="next" @click="activateCallback(3)">
                        <Icon name="mingcute:arrow-right-line" />
                      </Button>
                    </div>
                    <div v-if="step.value === 3" class="w-full rowSpaceBetween">
                      <Button class="back" @click="activateCallback(2)">
                        <Icon name="mingcute:arrow-left-line" />
                      </Button>
                      <Button class="next" @click="activateCallback(4)">
                        <Icon name="mingcute:arrow-right-line" />
                      </Button>
                    </div>
                    <div v-if="step.value === 4" class="w-full rowSpaceBetween">
                      <Button class="back" @click="activateCallback(3)">
                        <Icon name="mingcute:arrow-left-line" />
                      </Button>
                      <Button type="submit" class="submit">
                        <Icon name="mingcute:arrow-right-line" />
                      </Button>
                    </div>
                  </div>
                </StepPanel>
              </form>
            </StepPanels>
          </Stepper>
        </div>
      </div>
      <div class="socialMedia column">
        <p>Or contact us at:</p>
        <ul class="column">
          <li
            v-for="(social, index) in socialMedia"
            :key="index"
            class="rowCenter"
          >
            <div class="bgCover" :class="social.img"></div>
            <p>{{ social.text }}</p>
          </li>
        </ul>
      </div>
    </section>
    <div class="rightsReserved bg-dark-violet">
      <p class="text-center">© Lime Devs. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0,
      formData: {},
      steps: [
        {
          value: 1,
          id: "name",
          label: "Enter your <span class='font-bold'>name</span>",
          type: "text",
          placeholder: "Your name",
        },
        {
          value: 2,
          id: "email",
          label: "Enter your <span class='font-bold'>email</span>",
          type: "email",
          placeholder: "Your email",
        },
        {
          value: 3,
          id: "companyName",
          label:
            "Enter your <span class='font-bold'>company name</span> (Optional)",
          type: "text",
          placeholder: "Your company name",
        },
        {
          value: 4,
          id: "idea",
          label:
            "Tell us about your <span class='font-bold'>idea</span> (Optional)",
          placeholder: "Your idea",
        },
      ],
      socialMedia: [
        {
          link: "#",
          img: "whatsAppIcon",
          text: "+54 9 11 1111 1111",
        },
        {
          link: "#",
          img: "emailIcon",
          text: "hola@limedevs.com",
        },
        {
          link: "#",
          img: "linkedInIcon",
          text: "limedevs",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formData);
    },
  },
};
</script>

<style>
.stepperFooter .p-step-header {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-violet);
  border: 2px solid var(--color-lime);
  border-radius: 999px;
  color: var(--color-lime);
}

.stepperFooter .p-step-active .p-step-header {
  background: var(--color-lime);
  color: var(--color-violet);
}

.stepperFooter .p-step-number {
  font-size: 1.5rem;
  font-weight: 700;
}

.stepperFooter .stepContent {
  margin-top: 1.25rem;
}

.stepperFooter .stepContent label {
  font-size: 0.75rem;
}

.stepperFooter input,
.stepperFooter textarea {
  width: 100%;
  border: 2px solid var(--color-lime);
  background: var(--color-violet);
  color: var(--color-white);
  padding: 0.875rem 1.5rem;
  margin-top: 0.375rem;
}

.stepperFooter input {
  border-radius: 999px;
}

.stepperFooter textarea {
  height: 7.5rem;
  border-radius: 24px;
  resize: none;
}

.stepperFooter input:focus-visible,
.stepperFooter textarea:focus-visible {
  outline: none !important;
}

.next,
.back,
.submit {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px !important;
  cursor: pointer;
  padding: 1.25rem;
}

.next {
  align-self: flex-end;
  background: var(--color-light-violet) !important;
  border: 2px solid #7372b5 !important;
}

.back {
  color: var(--color-lime);
  border: 2px solid #7372b5 !important;
}

.submit {
  background: var(--color-lime) !important;
  color: var(--color-dark-violet) !important ;
}
</style>

<style scoped>
footer > section {
  padding: 2rem 1rem;
}

footer > section > img:first-of-type {
  width: 3.75rem;
}

.socialMedia {
  gap: 0.75rem;
}

.socialMedia p {
  font-size: 0.875rem;
}

.socialMedia ul {
  gap: 0.75rem;
}

.socialMedia ul li {
  gap: 0.75rem;
}

.socialMedia ul li div {
  width: 1.125rem;
  height: 1.125rem;
}

.whatsAppIcon {
  background-image: url("/images/footer/WhatsApp-Icon.svg");
}

.emailIcon {
  background-image: url("/images/footer/Email-Icon.svg");
}

.linkedInIcon {
  background-image: url("/images/footer/LinkedIn-Icon.svg");
}

.rightsReserved {
  padding: 1.25rem;
}

.rightsReserved p {
  font-size: 0.75rem;
}
</style>
