<template>
    <div class="layout">
        <header
            class="flex flex-col sm:flex-row sm:justify-between items-center gap-3 bg-dark py-4 md:py-7 2xl:py-8 px-6 md:px-[3.75rem] 2xl:px-[5.625rem]">
            <NuxtLink :to="ROUTE_NAMES.HOME">
                <NuxtImg src="/images/Lime-Devs-Logo.svg" alt="Lime Devs Logo"
                    class="w-[2.5rem] sm:w-12 md:w-[3.75rem] 2xl:w-[5.75rem] h-full object-cover" />
            </NuxtLink>
        </header>
        <slot />
        <DefaultFooter />
    </div>
</template>

<style scoped>
.layout {
    height: 100%;
    display: grid;
    grid: "header" auto "main" 1fr "footer" auto / 1fr;
}

header {
    grid-area: header;
}

main {
    grid-area: main;
}

footer {
    grid-area: footer;
}
</style>

<script setup>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
</script>
