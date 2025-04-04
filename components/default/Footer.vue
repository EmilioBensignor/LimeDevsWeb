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
            <Stepper v-if="form" :value="1" aria-labelledby="Form contact">
              <StepList>
                <Step
                  v-for="step in steps"
                  :key="step.value"
                  :value="step.value">
                  {{ step.title }}
                </Step>
              </StepList>
              <StepPanels>
                <form @submit.prevent="handleFormSubmission">
                  <StepPanel
                    v-for="step in steps"
                    :key="step.value"
                    :value="step.value"
                    :class="step.panelClass"
                    v-slot="{ activateCallback }">
                    <div>
                      <div class="inputsNextBack">
                        <div v-if="step.value !== 1" class="nextBack">
                          <Button
                            aria-label="Go back to previous step"
                            class="back"
                            @click="activateCallback(step.value - 1)">
                            <Icon name="mingcute:arrow-left-line" />
                          </Button>
                        </div>
                        <div class="stepContent column">
                          <div>
                            <label :for="step.id" v-html="step.label"></label>
                            <input
                              v-if="
                                ['name', 'email', 'companyName'].includes(
                                  step.id
                                )
                              "
                              :type="step.type"
                              v-model="formData[step.id]"
                              :id="step.id"
                              :name="step.id"
                              :placeholder="step.placeholder"
                              autocomplete="off"
                              @keydown.enter.prevent="
                                handleEnterKey($event, step, activateCallback)
                              " />
                            <textarea
                              v-else
                              v-model="formData.idea"
                              :id="step.id"
                              :placeholder="step.placeholder"
                              @keydown.enter.prevent="
                                handleEnterKey($event, step, activateCallback)
                              "></textarea>
                          </div>
                        </div>
                        <div class="nextBack">
                          <Button
                            aria-label="Go to next step"
                            v-if="step.value < steps.length"
                            class="next"
                            @click="validateAndProceed(step, activateCallback)">
                            <Icon name="mingcute:arrow-right-line" />
                          </Button>
                          <Button
                            aria-label="Send contact form"
                            v-else
                            type="submit"
                            class="submit">
                            <Icon name="mingcute:arrow-right-line" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div
                          class="error gap-1 mt-1"
                          v-if="errors.name && step.id === 'name'">
                          <Icon
                            name="mingcute:alert-octagon-line"
                            style="color: var(--color-red)" />
                          <p>{{ errors.name }}</p>
                        </div>
                        <div
                          class="error errorMail gap-1 mt-1"
                          v-if="errors.email && step.id === 'email'">
                          <Icon
                            name="mingcute:alert-octagon-line"
                            style="color: var(--color-red)" />
                          <p>{{ errors.email }}</p>
                        </div>
                      </div>
                      <div class="nextBackMobile mt-3">
                        <div
                          v-if="step.value === 1"
                          class="w-full flex justify-content-end">
                          <Button
                            aria-label="Go to next step"
                            class="next"
                            @click="validateAndProceed(step, activateCallback)">
                            <Icon name="mingcute:arrow-right-line" />
                          </Button>
                        </div>
                        <div
                          v-if="step.value !== 1"
                          class="w-full rowSpaceBetween">
                          <Button
                            aria-label="Go back to previous step"
                            class="back"
                            @click="activateCallback(step.value - 1)">
                            <Icon name="mingcute:arrow-left-line" />
                          </Button>
                          <Button
                            aria-label="Go to next step"
                            v-if="step.value < steps.length"
                            class="next"
                            @click="validateAndProceed(step, activateCallback)">
                            <Icon name="mingcute:arrow-right-line" />
                          </Button>
                          <Button
                            aria-label="Send contact form"
                            v-else
                            type="submit"
                            class="submit">
                            <Icon name="mingcute:arrow-right-line" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </StepPanel>
                </form>
              </StepPanels>
            </Stepper>
            <div v-else class="newMessage columnAlignCenter gap-3">
              <p class="text-center">
                We've received your message and will get back to you soon.
                Thanks for choosing Lime Devs to help
                <span class="text-lime font-bold"
                  >bring your ideas to life.</span
                >
              </p>
              <Button aria-label="Send another contact form" class="btnNewMessage" @click="form = true">
                Send a new message
              </Button>
            </div>
          </div>
        </div>
        <div class="socialMedia column">
          <p>Or contact us at:</p>
          <ul class="column">
            <li v-for="(social, index) in socialMedia" :key="index">
              <NuxtLink
                v-if="social.type !== 'email'"
                :to="social.link"
                target="_blank"
                class="rowCenter no-underline">
                <div class="bgCover" :class="social.img"></div>
                <p class="text-white no-underline">{{ social.text }}</p>
              </NuxtLink>
              <a
                v-else
                :href="social.link"
                @click.prevent="handleEmailClick(social)"
                class="rowCenter no-underline">
                <div class="bgCover" :class="social.img"></div>
                <p class="text-white no-underline">{{ social.text }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="rightsReserved bg-dark-violet">
      <p class="text-center">{{ new Date().getFullYear() }} Lime Devs © All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        form: true,
        currentStep: 0,
        formData: {
          name: "",
          email: "",
          companyName: "",
          idea: "",
        },
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
            type: "whatsapp",
            link: "https://wa.me/5491156362938",
            img: "whatsAppIcon",
            text: "+54 9 11 5636 2938",
          },
          {
            type: "email",
            link: "mailto:hello@limedevs.com",
            img: "emailIcon",
            text: "hello@limedevs.com",
          },
          {
            type: "linkedin",
            link: "https://www.linkedin.com/company/lime-devs",
            img: "linkedInIcon",
            text: "limedevs",
          },
        ],
        errors: {
          name: "",
          email: "",
        },
      };
    },
    computed: {
      isValid() {
        return !this.errors.name && !this.errors.email;
      },
    },
    methods: {
      handleEmailClick(social) {
        const mailtoLink = `mailto:${social.text}?subject=Contact%20Lime%20Devs
      &body=Reaching%20out%20for%20more%20information%20about%20the%20products.`;

        window.location.href = mailtoLink;

        setTimeout(() => {
          if (document.hasFocus()) {
            if (
              confirm(
                "Your email client didn't open? Click OK to copy the email address to clipboard."
              )
            ) {
              navigator.clipboard
                .writeText(social.text)
                .then(() => alert("Email address copied to clipboard."))
                .catch((err) => console.error("Error copying: ", err));
            }
          }
        }, 1000);
      },
      handleEnterKey(event, step, activateCallback) {
        if (step.value === this.steps.length) {
          this.handleFormSubmission();
        } else {
          this.validateAndProceed(step, activateCallback);
        }
      },
      validateAndProceed(step, activateCallback) {
        if (step.id === "name") {
          this.validateName(() =>
            this.proceedToNextStep(step, activateCallback)
          );
        } else if (step.id === "email") {
          this.validateEmail(() =>
            this.proceedToNextStep(step, activateCallback)
          );
        } else {
          this.proceedToNextStep(step, activateCallback);
        }
      },
      proceedToNextStep(step, activateCallback) {
        if (step.value < this.steps.length) {
          activateCallback(step.value + 1);
        }
      },
      validateName(callback) {
        if (!this.formData.name) {
          this.errors.name = "You must enter a name";
        } else if (this.formData.name.length <= 2) {
          this.errors.name = "The name must be at least 2 characters long";
        } else {
          this.errors.name = "";
          callback();
        }
      },
      validateEmail(callback) {
        if (!this.formData.email) {
          this.errors.email = "You must enter an email address";
        } else if (!/.+@.+\..+/.test(this.formData.email)) {
          this.errors.email =
            "The email address must include an @ and a . (dot)";
        } else {
          this.errors.email = "";
          callback();
        }
      },
      handleFormSubmission() {
        this.validateName(() => {
          this.validateEmail(() => {
            if (this.isValid) {
              this.sendEmail(
                "New Contact us form filled",
                `Nombre: ${this.formData.name}\nEmail: ${this.formData.email}\nNombre Empresa: ${this.formData.companyName}\nIdea: ${this.formData.idea}`
              );
              this.form = false;
              this.formData = {};
            }
          });
        });
      },
      async sendEmail(subject, body) {
        try {
          // Use the native `fetch` API to send the email directly to Firebase Cloud Function
          const response = await fetch(
            "https://sendemail-hqtj3w7u2q-uc.a.run.app",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                subject,
                body,
              }),
            }
          );

          if (!response.ok) {
            const error = await response.json();
            console.error("Error sending email:", error.message);
          } else {
            const result = await response.json();
            console.log("Email sent successfully:", result);
          }
        } catch (err) {
          console.error("Unexpected error:", err);
        }
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

  .stepperFooter .stepContent label {
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
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px !important;
    cursor: pointer;
  }

  .next:hover,
  .back:hover,
  .submit:hover {
    box-shadow: -2px -2px 10px 0px #c3c3d5 inset;
  }

  .next {
    align-self: flex-end;
    background: var(--color-light-violet) !important;
    border: 2px solid #7372b5 !important;
    color: var(--color-white) !important;
  }

  .back {
    background: none;
    border: 2px solid #7372b5 !important;
    color: var(--color-light-violet) !important;
  }

  .submit {
    background: var(--color-lime) !important;
    color: var(--color-dark-violet) !important ;
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

    .stepperFooter .p-step-active .p-step-header .p-step-title {
      color: var(--color-violet) !important;
    }
  }

  @media (width >= 700px) {
    .stepperFooter {
      max-width: 630px;
    }

    .stepperFooter .p-steppanel {
      max-width: 100%;
      display: flex;
      gap: 2rem;
      margin: 0 auto;
    }

    .nextBackMobile {
      display: none;
    }

    .stepperFooter .inputsNextBack {
      display: flex;
      gap: 2rem;
    }

    .errorMail {
      margin-left: 5rem;
    }

    .nextBack {
      display: flex;
      align-items: flex-end;
    }

    .stepContent {
      width: 26.313rem;
    }

    .labelBold {
      font-weight: 400;
    }

    .stepperFooter .stepContent label {
      font-size: 0.875rem;
    }

    .stepperFooter input,
    .stepperFooter textarea {
      margin-top: 0.75rem;
    }
  }

  @media (width >= 1080px) {
    .stepperFooter {
      max-width: 750px;
    }

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

    .stepperFooter .stepContent label {
      font-size: 1.125rem;
    }
  }

  @media (width >= 1440px) {
    .stepperFooter {
      max-width: 850px;
    }

    .stepperFooter form {
      max-width: 80%;
    }
  }
</style>

<style scoped>
  footer > section {
    padding: 3rem 1.5rem;
  }

  footer > section > img:first-of-type {
    width: 3.75rem;
    height: 100%;
  }

  .newMessage p {
    max-width: 395px;
    font-size: 0.875rem;
  }

  .btnNewMessage {
    background: var(--color-light-violet);
    border-radius: 999px;
    border: none;
    color: var(--color-white);
    font-size: 0.875rem;
    font-weight: 700;
    transition: all 0.3s;
    cursor: pointer;
    padding: 0.688rem 1.25rem;
  }

  .btnNewMessage:hover {
    background: var(--color-light-violet) !important;
    box-shadow: -6px -2px 10px 0px #c3c3d5 inset;
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

  .socialMedia ul li a {
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

    .newMessage {
      align-items: flex-start;
    }
    .newMessage p {
      max-width: 500px;
      text-align: start !important;
      font-size: 1.125rem;
    }
    .btnNewMessage {
      padding: 0.938rem 2.5rem;
    }

    .socialMedia {
      gap: 1.25rem;
      margin-top: 1.75rem;
    }

    .socialMedia p:first-child {
      font-size: 1.25rem;
      font-weight: 700;
    }

    .socialMedia ul {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    .socialMedia ul li div {
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
      align-items: flex-end;
      gap: 5rem !important;
    }

    .stepperSocialMedia > div:first-of-type {
      width: 100%;
    }

    .newMessage {
      gap: 1.25rem !important;
    }
    .newMessage p {
      max-width: 560px;
      font-size: 1.25rem;
    }
    .btnNewMessage {
      font-size: 1.25rem;
      padding: 0.75rem 2.5rem;
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

    .socialMedia ul li a {
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
    .newMessage p {
      max-width: 700px;
      font-size: 1.5rem;
    }
  }
  @media (width >= 1920px) {
    .stepperSocialMedia > div:first-of-type {
      max-width: 1000px;
    }
  }
</style>
