<template>
    <main>
        <h1>Thank you for your support!</h1>
        <p>If you'd like to help us grow, you can leave us a Google review or follow us on LinkedIn 🙌</p>

        <div class="buttons">
            <a href="https://g.page/r/YOUR_PLACE_ID/review" target="_blank" class="button google">
                ⭐️ Leave a Google Review
            </a>

            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" class="button linkedin">
                🔗 Follow us on LinkedIn
            </a>
        </div>
    </main>
</template>

<script setup>
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