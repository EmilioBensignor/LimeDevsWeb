<template>
    <article
        class="w-60 h-full relative overflow-visible transition-all duration-300 wow animate__animated animate__fadeInUp md:w-[40%] lg:w-[26%] xl:w-[23%] md:first:mt-[-10rem] md:even:mt-24 md:last:mt-24 lg:first:mt-0 lg:even:mt-0 lg:[&:nth-child(3n-2)]:mt-[-12rem] lg:[&:nth-child(3n-1)]:mt-40 lg:[&:nth-child(3n)]:mt-[-4rem] 2xl:last:mt-24">
        <div class="w-full h-full flex [transform-style:preserve-3d] [transform:perspective(1000px)] [will-change:transform]"
            ref="tiltElementRef">
            <img :src="`/images/projects/${project.img}-Lime-Devs-Project.webp`"
                :alt="`${project.alt} Lime Devs Project`" class="w-full h-full object-cover" />
            <div class="flex flex-col items-start gap-3 absolute z-10 top-1/4 left-0 ml-2 px-4 pb-4 md:top-[30%]"
                style="transform: translateZ(20px)">
                <p
                    class="max-w-full relative z-20 text-start text-light text-[1.75rem] font-bold -ml-10 transition-all duration-300 text-shadow">
                    {{ project.title }}</p>
                <p class="text-start text-light font-medium">{{ project.service }}</p>
                <!-- <p class="opacity-0 border-b border-light font-['Fjalla_One'] font-bold no-underline pb-0.5 transition-all duration-300 text-light hover:opacity-100">See more</p> -->
            </div>
        </div>
    </article>
</template>

<script setup>
import VanillaTilt from "vanilla-tilt";

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});

const tiltElementRef = ref(null);

onMounted(async () => {
    await nextTick();

    if (tiltElementRef.value) {
        VanillaTilt.init(tiltElementRef.value, {
            max: 20,
            speed: 600,
            scale: 1.05,
            glare: true,
            "max-glare": 0.2,
            gyroscope: true
        });
    }
});

onBeforeUnmount(() => {
    if (tiltElementRef.value && tiltElementRef.value.vanillaTilt) {
        tiltElementRef.value.vanillaTilt.destroy();
    }
});
</script>

<style scoped>
article:hover .text-shadow {
    text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
}
</style>