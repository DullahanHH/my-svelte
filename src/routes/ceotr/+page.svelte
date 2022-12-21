<script>
    import ProjectCard from "$lib/ProjectCard.svelte";

    import gliders from "$lib/assets/gliders.png";
    import c6 from "$lib/assets/c6.png";
    import website from "$lib/assets/website.png";
</script>

<div>
    <h1>CEOTR Projects</h1>

    <ProjectCard
            title="Glider Website"
            imgSet={[gliders,c6,website]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo hendrerit ipsum, ac porttitor ex
        fermentum pharetra. Phasellus lobortis aliquam mauris. Quisque at interdum magna, sit amet mattis magna. Etiam
        vel erat cursus, efficitur libero eget, vehicula arcu. Curabitur in nulla eleifend, placerat tortor vel, tempor
        velit. Quisque mauris turpis, porttitor nec neque a, tempor suscipit dolor. Praesent laoreet est sed quam
        rhoncus, quis suscipit nunc lobortis."
    />

    <ProjectCard
            title="C6 to CSV Converter"
            imgSet=""
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo hendrerit ipsum, ac porttitor ex
        fermentum pharetra. Phasellus lobortis aliquam mauris. Quisque at interdum magna, sit amet mattis magna. Etiam
        vel erat cursus, efficitur libero eget, vehicula arcu. Curabitur in nulla eleifend, placerat tortor vel, tempor
        velit. Quisque mauris turpis, porttitor nec neque a, tempor suscipit dolor. Praesent laoreet est sed quam
        rhoncus, quis suscipit nunc lobortis."
    />

    <ProjectCard
            title="MAPEL Website"
            imgSet=""
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo hendrerit ipsum, ac porttitor ex
        fermentum pharetra. Phasellus lobortis aliquam mauris. Quisque at interdum magna, sit amet mattis magna. Etiam
        vel erat cursus, efficitur libero eget, vehicula arcu. Curabitur in nulla eleifend, placerat tortor vel, tempor
        velit. Quisque mauris turpis, porttitor nec neque a, tempor suscipit dolor. Praesent laoreet est sed quam
        rhoncus, quis suscipit nunc lobortis."
    />

</div>