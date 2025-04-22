<template>
    <NuxtLink v-if="to" :to="to"
        class="bg-gradient-to-r from-primary via-primary to-lightPrimary bg-[length:200%_100%] bg-left-bottom border-none rounded-full font-bold text-sm md:text-base xl:text-xl 3xl:text-2xl text-dark no-underline transition-all duration-300 ease-in-out cursor-pointer py-[0.938rem] xl:py-4 px-10 lg:px-[3.75rem] hover:bg-right-bottom">
        <slot />
    </NuxtLink>
    <button v-else type="button"
        class="bg-gradient-to-r from-primary via-primary to-lightPrimary bg-[length:200%_100%] bg-left-bottom border-none rounded-full font-bold text-sm md:text-base xl:text-xl 3xl:text-2xl text-dark no-underline transition-all duration-300 ease-in-out cursor-pointer py-[0.938rem] xl:py-4 px-10 lg:px-[3.75rem] hover:bg-right-bottom">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        to: {
            type: [String, Object],
            default: null
        }
    }
}
</script>