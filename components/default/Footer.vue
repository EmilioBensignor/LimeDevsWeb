<template>
  <footer id="contactUs" class="bg-dark">
    <DefaultSection class="bg-secondary60">
      <DefaultContent class="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-5 md:gap-8">
        <div class="flex flex-col gap-5 md:gap-8">
          <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo" class="w-[3.75rem] h-full md:w-[5rem] xl:w-[6.25rem]" />
          <TitleH2 class="text-light text-start">
            Ready to
            <span class="text-primary underline">transform your business</span>?
          </TitleH2>
          <DefaultContact />
        </div>
        <div class="flex flex-col gap-3 md:gap-5">
          <p class="text-light text-sm md:text-xl md:font-bold xl:text-2xl xl:text-end">Or contact us at:</p>
          <ul class="flex flex-col md:flex-row md:justify-between xl:flex-col gap-3">
            <li v-for="(social, index) in socialMedia" :key="index">
              <NuxtLink v-if="social.type !== 'email'" :to="social.link" target="_blank"
                class="flex xl:flex-row-reverse items-center gap-3 no-underline">
                <Icon :name="`mingcute:${social.icon}`" size="1.5rem" class="text-primary" />
                <p class="text-light text-sm md:text-base xl:text-xl no-underline">{{ social.text }}</p>
              </NuxtLink>
              <a v-else :href="social.link" @click.prevent="handleEmailClick(social)" class="flex xl:flex-row-reverse items-center gap-3 no-underline">
                <Icon :name="`mingcute:${social.icon}`" size="1.5rem" class="text-primary" />
                <p class="text-light text-sm md:text-base xl:text-xl no-underline">{{ social.text }}</p>
              </a>
            </li>
          </ul>
        </div>
      </DefaultContent>
    </DefaultSection>
    <div class="bg-dark p-6 xl:p-5">
      <DefaultContent>
        <p class="text-center text-light text-xs md:text-sm xl:text-base">{{ new Date().getFullYear() }} Lime Devs © All
          rights reserved.</p>
      </DefaultContent>
    </div>
  </footer>
</template>

<script setup>
const socialMedia = [
  {
    type: "whatsapp",
    link: "https://wa.me/5491156362938",
    icon: "whatsapp-line",
    text: "+54 9 11 5636 2938",
  },
  {
    type: "email",
    link: "mailto:hello@limedevs.com",
    icon: "mail-line",
    text: "hello@limedevs.com",
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/company/lime-devs",
    icon: "linkedin-line",
    text: "limedevs",
  },
];

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