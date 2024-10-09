<template>
  <footer id="contactUs" class="bg-violet-60">
    <section class="column gap-5">
      <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" />
      <div class="stepperSocialMedia column gap-5">
        <div class="column gap-5">
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
                >
                  {{ step.title }}
                </Step>
              </StepList>
              <StepPanels>
                <form @submit.prevent="handleSubmit">
                  <StepPanel
                    v-for="step in steps"
                    :key="step.value"
                    :value="step.value"
                    :class="step.panelClass"
                    v-slot="{ activateCallback }"
                  >
                    <div v-if="step.value !== 1" class="nextBack">
                      <Button
                        class="back"
                        @click="activateCallback(step.value - 1)"
                      >
                        <Icon name="mingcute:arrow-left-line" />
                      </Button>
                    </div>
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
                    <div class="nextBack">
                      <Button
                        v-if="step.value !== 4"
                        class="next"
                        @click="activateCallback(step.value + 1)"
                      >
                        <Icon name="mingcute:arrow-right-line" />
                      </Button>
                      <Button v-else type="submit" class="submit">
                        <Icon name="mingcute:arrow-right-line" />
                      </Button>
                    </div>
                    <div class="nextBackMobile mt-3">
                      <div
                        v-if="step.value === 1"
                        class="w-full flex justify-content-end"
                      >
                        <Button
                          class="next"
                          @click="activateCallback(step.value + 1)"
                        >
                          <Icon name="mingcute:arrow-right-line" />
                        </Button>
                      </div>
                      <div
                        v-if="step.value !== 1"
                        class="w-full rowSpaceBetween"
                      >
                        <Button
                          class="back"
                          @click="activateCallback(step.value - 1)"
                        >
                          <Icon name="mingcute:arrow-left-line" />
                        </Button>
                        <Button
                          v-if="step.value !== 4"
                          class="next"
                          @click="activateCallback(step.value + 1)"
                        >
                          <Icon name="mingcute:arrow-right-line" />
                        </Button>
                        <Button v-else type="submit" class="submit">
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
              <NuxtLink :to="social.link" class="linkSocial" target="_blank">
                <div class="bgContain" :class="social.img"></div>
                <div class="w-full decorationLime">
                  <p class="text-white">{{ social.text }}</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
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
          title: "Name",
          id: "name",
          label: "Enter your <span class='labelBold'>name</span>",
          type: "text",
          placeholder: "Your name",
          panelClass: "panelName",
        },
        {
          value: 2,
          title: "Email",
          id: "email",
          label: "Enter your <span class='labelBold'>email</span>",
          type: "email",
          placeholder: "Your email",
        },
        {
          value: 3,
          title: "Company",
          id: "companyName",
          label:
            "Enter your <span class='labelBold'>company name</span> (Optional)",
          type: "text",
          placeholder: "Your company name",
        },
        {
          value: 4,
          title: "Tell us more!",
          id: "idea",
          label:
            "Tell us about your <span class='labelBold'>idea</span> (Optional)",
          placeholder: "Your idea",
        },
      ],
      socialMedia: [
        {
          link: "#",
          img: "whatsAppIcon",
          text: "+54 9 11 5636 2938",
        },
        {
          link: "#",
          img: "emailIcon",
          text: "hello@limedevs.com",
        },
        {
          link: "https://www.linkedin.com/company/lime-devs/",
          img: "linkedInIcon",
          text: "limedevs",
        },
      ],
      formData: {
        name: "",
        email: "",
        company: "",
        idea: "",
      },
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
.stepperFooter .p-steppanel {
  max-width: 400px;
  margin: 0 auto;
}

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

.stepperFooter .p-steplist {
  margin-bottom: 1rem;
}

.stepperFooter .p-step-active .p-step-header {
  background: var(--color-lime);
  color: var(--color-violet);
}

.stepperFooter .p-step-number {
  font-size: 1.5rem;
  font-weight: 700;
}

.stepperFooter .p-step-title {
  display: none;
}

.stepperFooter .stepContent {
  margin-top: 1.25rem;
}

.stepperFooter .stepContent label,
.stepperFooter input,
.stepperFooter textarea {
  font-size: 0.75rem;
}

.labelBold {
  font-weight: 700;
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

.nextBack {
  display: none;
}

.next,
.back,
.submit {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px !important;
  transition: all 0.3s;
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

.next:hover {
  box-shadow: -2px -2px 10px 0px #c3c3d5 inset;
}

.submit {
  background: var(--color-lime) !important;
  color: var(--color-dark-violet) !important;
  transition: all 0.3s;
}

.submit:hover {
  box-shadow: -6px -2px 10px 0px #c3c3d5 inset;
}

@media (width >= 600px) {
  .stepperFooter .p-step-header {
    width: auto;
    height: auto;
    gap: 0.625rem;
    background: transparent;
    border: none;
    border-radius: 50px;
    color: var(--color-lime);
    opacity: 0.6;
    pointer-events: none;
    padding-right: 1rem;
  }

  .stepperFooter .p-step-active .p-step-header {
    background: var(--color-lime);
    color: var(--color-violet);
    opacity: 1;
  }

  .stepperFooter .p-step-number {
    width: 2.125rem;
    height: 2.125rem;
    background: var(--color-violet);
    border-radius: 999px;
    border: 2px solid var(--color-lime);
    font-size: 1.125rem;
  }

  .stepperFooter .p-step-active .p-step-number {
    background: var(--color-violet);
    color: var(--color-lime);
  }

  .stepperFooter .p-step-title {
    display: inline;
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-white);
  }
}

@media (width >= 700px) {
  .stepperFooter .p-steppanel {
    max-width: 100%;
    margin: 0 auto;
  }

  .nextBackMobile {
    display: none;
  }

  .nextBack {
    display: flex;
    align-items: flex-end;
  }

  .stepperFooter .p-steppanel {
    display: flex;
    gap: 3rem;
  }

  .stepContent {
    width: 26.313rem;
  }

  .labelBold {
    font-weight: 400;
  }

  .stepperFooter .stepContent label,
  .stepperFooter input,
  .stepperFooter textarea {
    font-size: 0.875rem;
  }

  .stepperFooter input,
  .stepperFooter textarea {
    margin-top: 0.75rem;
  }

  .next,
  .back,
  .submit {
    width: 2.75rem;
    height: 2.75rem;
  }

  .next .iconify,
  .back .iconify,
  .submit .iconify {
    font-size: 1.25rem !important;
  }
}

@media (width >= 1080px) {
  .stepperFooter .p-step {
    padding: 0 !important;
  }

  .stepperFooter .p-steppanel {
    gap: 1.563rem;
  }

  .stepperFooter .panelName {
    gap: 5.5rem;
  }

  .stepperFooter .p-step-header {
    gap: 0.5rem;
    padding: 0 1.25rem 0 0;
  }

  .stepperFooter .p-step-number {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.25rem;
  }

  .stepperFooter .p-step-title {
    font-size: 1.25rem;
  }

  .stepperFooter .stepContent {
    width: 100%;
  }

  .stepperFooter .stepContent label,
  .stepperFooter input,
  .stepperFooter textarea {
    font-size: 1.125rem;
  }

  .next .iconify,
  .back .iconify,
  .submit .iconify {
    font-size: 1.5rem !important;
  }
}

@media (width >= 1440px) {
  .stepperFooter .p-steppanels {
    width: 85%;
  }

  .stepperFooter .panelName {
    width: 70%;
    gap: 5rem;
  }

  .stepperFooter .p-steppanel {
    gap: 3rem;
    margin: 0;
  }

  .stepperFooter .p-step-header {
    gap: 0.75rem;
  }

  .stepperFooter .p-step-number {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }

  .stepperFooter .p-step-title {
    font-size: 1.5rem;
  }

  .stepperFooter .stepContent label,
  .stepperFooter input,
  .stepperFooter textarea {
    font-size: 1.25rem;
  }

  .next,
  .back,
  .submit {
    width: 3.125em;
    height: 3.125em;
  }

  .next .iconify,
  .back .iconify,
  .submit .iconify {
    font-size: 2rem !important;
  }
}
</style>

<style scoped>
footer > section {
  padding: 3rem 1.5rem;
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

.socialMedia ul li div:first-of-type {
  width: 1.125rem;
  height: 1.125rem;
}

.socialMedia p:first-of-type {
  font-weight: 700;
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

.linkSocial {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  padding-bottom: 0.25rem;
}

.decorationLime {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #2d2c48;
  transition: all 0.3s;
}

.decorationLime:hover {
  border-color: var(--color-lime);
}

.decorationLime p {
  width: max-content;
  font-weight: 400 !important;
}

.rightsReserved {
  padding: 1.5rem;
}

.rightsReserved p {
  font-size: 0.75rem;
}

@media (width >= 700px) {
  footer > section {
    padding: 2.75rem 3.75rem;
  }

  footer > section > img:first-of-type {
    width: 5rem;
  }

  h2 {
    text-align: start;
  }

  section > div:first-of-type {
    gap: 2rem !important;
  }

  .socialMedia {
    gap: 1.25rem;
    margin-top: 1.75rem;
  }

  .socialMedia p:first-of-type {
    font-size: 1.25rem;
  }

  .socialMedia ul {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  .socialMedia ul li div:first-of-type {
    width: 1.5rem;
    height: 1.5rem;
  }

  .socialMedia p {
    font-size: 1rem;
  }

  .rightsReserved {
    padding: 1.5rem;
  }

  .rightsReserved p {
    font-size: 0.875rem;
  }
}

@media (width >= 1080px) {
  footer > section {
    padding: 3.75rem 5.625rem;
  }

  footer > section > img:first-of-type {
    width: 6.25rem;
  }

  footer section .stepperSocialMedia {
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem !important;
  }

  .stepperSocialMedia > div:first-of-type {
    width: 100%;
    max-width: 700px;
  }

  .socialMedia p {
    font-size: 1.25rem;
  }

  .socialMedia p:first-child {
    text-align: end;
  }

  .socialMedia ul {
    flex-direction: column;
  }

  .socialMedia ul li {
    flex-direction: row-reverse;
  }

  .rightsReserved {
    padding: 1.25rem;
  }

  .rightsReserved p {
    font-size: 1rem;
  }
}

@media (width >= 1440px) {
  .stepperSocialMedia > div:first-of-type {
    max-width: 850px;
  }

  .stepperFooter .stepContent {
    margin-top: 2.5rem;
  }
}

@media (width >= 1920px) {
  .stepperSocialMedia > div:first-of-type {
    max-width: 1000px;
  }
}
</style>
