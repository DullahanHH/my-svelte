<script>
    import ProjectCard from "$lib/ProjectCard.svelte";

    import fl from "$lib/assets/fl.png";

    import pixel from "$lib/assets/pixel.png";
    import pixel1 from "$lib/assets/pixel-1.png";
    import pixel2 from "$lib/assets/pixel-2.png";
    import pixel3 from "$lib/assets/pixel-3.png";

</script>

<div>
    <h1>Other Projects</h1>

    <ProjectCard
            title="'A New Start' (FL Studio)"
            imgSet={[fl]}
            description="A Melodic Dubstep created using FL Studio. Technics used: Envelope, Reverb, Kick Start, Sample Editing, Automation, etc."
    />

    <ProjectCard
            title="Pixel Art (Aseprite)"
            imgSet={[pixel,pixel1,pixel2,pixel3]}
            description="Pixel art for practice and game development. Include animation and other technics."
    />

</div>