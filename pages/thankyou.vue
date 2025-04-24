<template>
    <main class="flex justify-center items-center bg-dark text-light">
        <DefaultSection>
            <DefaultContent class="flex flex-col items-center gap-3 xl:gap-8 2xl:gap-10">
                <TitleH1>Thank you for your support!</TitleH1>
                <p class="text-center 2xl:text-2xl">If you'd like to help us grow, you can leave us a Google review or
                    follow us on
                    LinkedIn 🙌</p>

                <div class="flex flex-wrap justify-center items-center gap-4">
                    <ButtonPrimary to="https://search.google.com/local/writereview?placeid=ChIJ1RJAt_LKvJURGdLv3XH4dTA"
                        target="_blank">
                        Leave a Google Review
                    </ButtonPrimary>
                    <ButtonPrimary :to="'https://www.linkedin.com/company/lime-devs'" target="_blank">
                        Follow us on LinkedIn
                    </ButtonPrimary>
                </div>
            </DefaultContent>
        </DefaultSection>
    </main>
</template>

<script setup>
definePageMeta({
    layout: "thankyou",
});

useSeoMeta({
    title: "Turning ideas into real tech solutions | Lime Devs",
    description: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
    ogTitle: "Turning ideas into real tech solutions | Lime Devs",
    ogDescription: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
    ogImage: "/images/Lime-Devs-Logo.svg",
    ogType: "website",
    ogUrl: "https://limedevs.com",
    twitterTitle: "Turning ideas into real tech solutions | Lime Devs",
    twitterDescription: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
    twitterImage: "/images/Lime-Devs-Logo.svg",
    twitterCard: 'summary_large_image',
});

useSchemaOrg([
    defineWebPage({
        name: "Turning ideas into real tech solutions | Lime Devs",
        description: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
        image: "/images/Lime-Devs-Logo.svg",
    }),
    {
        '@type': 'CreativeWork',
        name: "Turning ideas into real tech solutions | Lime Devs",
        description: "Innovating with tailor-made software and hardware solutions to accelerate growth, efficiency, and scalability for startups, enterprises, and established businesses.",
        image: "/images/Lime-Devs-Logo.svg",
        author: {
            '@type': 'Organization',
            name: 'Lime Devs',
            url: 'https://limedevs.com'
        },
        headline: "Turning ideas into real tech solutions | Lime Devs",
        datePublished: new Date().toISOString(),
        publisher: {
            '@type': 'Organization',
            name: 'Lime Devs',
            logo: {
                '@type': 'ImageObject',
                url: '/images/Lime-Devs-Logo.svg'
            }
        }
    }
]);
</script>