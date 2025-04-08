<template>
    <div>
        <button aria-label="Contact Form" :class="buttonClass || 'primaryButton'" @click="openDialog">
            <slot>Contact us</slot>
        </button>

        <dialog ref="contactDialog" class="contactDialog">
            <div class="contactForm column gap-5">
                <div class="rowSpaceBetweenCenter">
                    <h2 class="text-lime">Contact Us</h2>
                    <button class="closeButton" @click="closeDialog">&times;</button>
                </div>

                <form v-if="form" @submit.prevent="handleFormSubmission" class="column gap-5">
                    <div>
                        <label for="name">Enter your <strong>name</strong></label>
                        <input type="text" id="name" v-model="formData.name" placeholder="Your name"
                            autocomplete="false" required />
                        <p v-if="errors.name" class="errorMessage">{{ errors.name }}</p>
                    </div>
                    <div>
                        <label for="email">Enter your <strong>email</strong></label>
                        <input type="text" id="email" v-model="formData.email" placeholder="Your email"
                            autocomplete="false" required />
                        <p v-if="errors.email" class="errorMessage">{{ errors.email }}</p>
                    </div>
                    <div>
                        <label for="companyName">Enter your <strong>company name</strong></label>
                        <input type="text" id="companyName" v-model="formData.companyName"
                            placeholder="Your company name" required />
                    </div>
                    <div>
                        <label for="idea">Tell us about your <strong>idea</strong></label>
                        <textarea id="idea" v-model="formData.idea" placeholder="Your idea"></textarea>
                    </div>

                    <button type="submit" aria-label="Submit contact form" :disabled="isSubmitting"
                        class="primaryButton">
                        {{ isSubmitting ? 'Sending...' : 'Submit' }}
                    </button>
                </form>
                <div v-else class="newMessage columnAlignCenter gap-3">
                    <p class="text-center text-white">
                        We've received your message and will get back to you soon.
                        Thanks for choosing Lime Devs to help
                        <span class="text-lime font-bold">bring your ideas to life.</span>
                    </p>
                    <button aria-label="Send another contact form" class="primaryButton" @click="resetForm">
                        Send a new message
                    </button>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script setup>
const props = defineProps({
    buttonClass: {
        type: String,
        default: 'primaryButton'
    }
});

const contactDialog = ref(null);
const scrollPosition = ref(0);

const form = ref(true);
const isSubmitting = ref(false);
const formData = reactive({
    name: "",
    email: "",
    companyName: "",
    idea: "",
});

const errors = reactive({
    name: "",
    email: "",
});

const isValid = computed(() => !errors.name && !errors.email);

const openDialog = () => {
    scrollPosition.value = window.scrollY;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition.value}px`;
    document.body.style.width = '100%';

    contactDialog.value.showModal();

    nextTick(() => {
        if (!contactDialog.value.hasAttribute('data-has-click-listener')) {
            contactDialog.value.addEventListener('click', handleBackdropClick);
            contactDialog.value.setAttribute('data-has-click-listener', 'true');
        }
    });
};

const closeDialog = () => {
    contactDialog.value.close();

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition.value);
};

const handleBackdropClick = (event) => {
    if (event.target === contactDialog.value) {
        closeDialog();
    }
};

onBeforeUnmount(() => {
    if (contactDialog.value && contactDialog.value.hasAttribute('data-has-click-listener')) {
        contactDialog.value.removeEventListener('click', handleBackdropClick);
    }

    if (document.body.style.position === 'fixed') {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition.value);
    }
});

// Validaciones
const validateName = () => {
    if (!formData.name) {
        errors.name = "You must enter a name";
        return false;
    } else if (formData.name.length <= 2) {
        errors.name = "The name must be at least 2 characters long";
        return false;
    } else {
        errors.name = "";
        return true;
    }
};

const validateEmail = () => {
    if (!formData.email) {
        errors.email = "You must enter an email address";
        return false;
    } else if (!/.+@.+\..+/.test(formData.email)) {
        errors.email = "The email address must include an @ and a . (dot)";
        return false;
    } else {
        errors.email = "";
        return true;
    }
};

// Reiniciar el formulario
const resetForm = () => {
    form.value = true;
    Object.keys(formData).forEach(key => {
        formData[key] = "";
    });
    errors.name = "";
    errors.email = "";
};

// Envio de formulario
const handleFormSubmission = async () => {
    const nameValid = validateName();
    const emailValid = validateEmail();

    if (nameValid && emailValid) {
        try {
            isSubmitting.value = true;

            const formattedMessage = `
                Nombre: ${formData.name}
                Email: ${formData.email}
                Nombre Empresa: ${formData.companyName || 'No proporcionado'}
                Idea: ${formData.idea || 'No proporcionada'}
            `;

            // Llamar a la API de envío de email con la estructura correcta
            const response = await $fetch('/api/sendEmail', {
                method: 'POST',
                body: {
                    body: formattedMessage
                }
            });

            form.value = false;

        } catch (error) {
            console.error('Error sending form:', error);
        } finally {
            isSubmitting.value = false;
        }
    }
};
</script>

<style scoped>
.contactDialog {
    width: 100%;
    max-width: 280px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20;
    background-color: var(--color-violet);
    border: 2px solid var(--color-lime);
    border-radius: 24px;
    transform: translate(-50%, -50%);
    padding: 2rem;
}

.contactDialog::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
}

.contactForm {
    width: 100%;
}

.closeButton {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--color-lime);
}

form>div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-size: 0.875rem;
    color: var(--color-white);
}

input,
textarea {
    width: 100%;
    border: 2px solid var(--color-lime);
    background: var(--color-violet);
    color: var(--color-white);
    padding: 0.875rem 1.25rem;
}

input {
    border-radius: 999px;
}

textarea {
    height: 7.5rem;
    border-radius: 24px;
    resize: none;
}

input:focus-visible,
textarea:focus-visible {
    outline: none !important;
}

.errorMessage {
    color: #ff6666;
    font-size: 0.75rem;
    margin-top: 0.25rem;
}

.newMessage {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (width >=660px) {
    .contactDialog {
        max-width: 400px;
    }

    label {
        font-size: 1rem;
    }

    .newMessage p {
        max-width: 500px;
        font-size: 1.125rem;
    }
}

@media (width >=992px) {
    .contactDialog {
        max-width: 500px;
    }

    form>div {
        gap: 0.75rem;
    }

    .closeButton {
        font-size: 2.5rem;
    }

    input,
    label,
    textarea {
        font-size: 1.125rem;
    }

    .newMessage p {
        max-width: 560px;
        font-size: 1.25rem;
    }

    .btnNewMessage {
        font-size: 1.25rem;
    }
}

@media (width >=1440px) {
    .contactDialog {
        max-width: 600px;
    }
}
</style>