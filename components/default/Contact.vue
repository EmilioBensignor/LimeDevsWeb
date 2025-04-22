<template>
    <div>
        <button v-if="headerButton" aria-label="Contact Form"
            class="relative z-10 bg-transparent border-none text-white text-xl md:text-2xl font-bold no-underline cursor-pointer"
            @click="openDialog">
            <slot>Contact us</slot>
        </button>
        <ButtonPrimary v-else @click="openDialog" aria-label="Contact Form">
            <slot>Contact us</slot>
        </ButtonPrimary>

        <dialog ref="contactDialog"
            class="w-full max-w-[280px] md:max-w-[400px] xl:max-w-[500px] 3xl:max-w-[600px] fixed top-1/2 left-1/2 z-20 bg-secondary border-2 border-primary rounded-[24px] translate-x-[-50%] translate-y-[-50%] p-8 backdrop:bg-black/70">
            <div class="w-full flex flex-col gap-5">
                <div class="flex justify-between items-center">
                    <TitleH2 class="text-primary">Contact Us</TitleH2>
                    <button class="text-[2rem] xl:text-[2.5rem] text-primary" @click="closeDialog">&times;</button>
                </div>

                <form v-if="form" @submit.prevent="handleFormSubmission" class="flex flex-col gap-5">
                    <div class="flex flex-col gap-2 xl:gap-3">
                        <label class="text-sm md:text-base text-light" for="name">Enter your
                            <strong>name</strong></label>
                        <input
                            class="w-full border-2 border-primary bg-secondary text-light rounded-full py-[0.875rem] px-5 focus-visible:outline-none"
                            type="text" id="name" v-model="formData.name" placeholder="Your name" autocomplete="false"
                            required />
                        <p v-if="errors.name" class="text-error text-xs mt-1">{{ errors.name }}</p>
                    </div>
                    <div class="flex flex-col gap-2 xl:gap-3">
                        <label class="text-sm md:text-base text-light" for="email">Enter your
                            <strong>email</strong></label>
                        <input
                            class="w-full border-2 border-primary bg-secondary text-light rounded-full py-[0.875rem] px-5 focus-visible:outline-none"
                            type="text" id="email" v-model="formData.email" placeholder="Your email"
                            autocomplete="false" required />
                        <p v-if="errors.email" class="text-error text-xs mt-1">{{ errors.email }}</p>
                    </div>
                    <div class="flex flex-col gap-2 xl:gap-3">
                        <label class="text-sm md:text-base text-light" for="companyName">Enter your <strong>company
                                name</strong></label>
                        <input
                            class="w-full border-2 border-primary bg-secondary text-light rounded-full py-[0.875rem] px-5 focus-visible:outline-none"
                            type="text" id="companyName" v-model="formData.companyName" placeholder="Your company name"
                            required />
                    </div>
                    <div class="flex flex-col gap-2 xl:gap-3">
                        <label class="text-sm md:text-base text-light" for="idea">Tell us about your
                            <strong>idea</strong></label>
                        <textarea
                            class="w-full h-[7.5rem] border-2 border-primary rounded-[24px] resize-none bg-secondary text-light py-[0.875rem] px-5 focus-visible:outline-none"
                            id="idea" v-model="formData.idea" placeholder="Your idea"></textarea>
                    </div>

                    <ButtonPrimary type="submit" aria-label="Submit contact form" :disabled="isSubmitting">
                        {{ isSubmitting ? 'Sending...' : 'Submit' }}
                    </ButtonPrimary>
                </form>
                <div v-else class="flex flex-col items-center gap-3 xl:gap-5">
                    <p class="md:w-max-[500px] xl:max-w-[560px] text-center md:text-[1.125rem] text-white">
                        We've received your message and will get back to you soon.
                        Thanks for choosing Lime Devs to help
                        <span class="text-lime font-bold">bring your ideas to life.</span>
                    </p>
                    <ButtonPrimary aria-label="Send another contact form" @click="resetForm">
                        Send a new message
                    </ButtonPrimary>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script setup>
const props = defineProps({
    headerButton: {
        type: Boolean,
        default: false
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