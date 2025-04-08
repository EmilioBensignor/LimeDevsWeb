<template>
  <footer id="contactUs" class="bg-violet-60">
    <section class="column gap-5">
      <div class="column gap-5">
        <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" class="logo" />
        <h2>
          Ready to
          <span class="text-lime underline">transform your business</span>?
        </h2>
        <DefaultContact />
      </div>
      <div class="socialMedia column">
        <p>Or contact us at:</p>
        <ul class="column">
          <li v-for="(social, index) in socialMedia" :key="index">
            <NuxtLink v-if="social.type !== 'email'" :to="social.link" target="_blank" class="rowCenter no-underline">
              <div class="bgCover" :class="social.img"></div>
              <p class="text-white no-underline">{{ social.text }}</p>
            </NuxtLink>
            <a v-else :href="social.link" @click.prevent="handleEmailClick(social)" class="rowCenter no-underline">
              <div class="bgCover" :class="social.img"></div>
              <p class="text-white no-underline">{{ social.text }}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div class="rightsReserved bg-dark-violet">
      <p class="text-center">{{ new Date().getFullYear() }} Lime Devs © All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Información de redes sociales
const socialMedia = [
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
];

// Método para manejar clics en email
const handleEmailClick = (social) => {
  const mailtoLink = `mailto:${social.text}?subject=Contact%20Lime%20Devs&body=Reaching%20out%20for%20more%20information%20about%20the%20products.`;
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
};
</script>

<style scoped>
footer>section {
  padding: 3rem 1.5rem;
}

.logo {
  width: 3.75rem;
  height: 100%;
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

/* No se necesita el estilo para el diálogo ya que ahora está en el componente ContactForm */

@media (width >=700px) {
  footer>section {
    gap: 4rem !important;
    padding: 2.75rem 3.75rem;
  }

  .logo {
    width: 5rem;
  }

  h2 {
    text-align: start;
  }

  section>div:first-of-type {
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

@media (width >=992px) {
  footer>section {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3.75rem 5.625rem;
  }

  .logo {
    width: 6.25rem;
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

@media (width >=1440px) {
  .newMessage p {
    max-width: 700px;
    font-size: 1.5rem;
  }
}
</style>