<script>
    import { base } from "$app/paths";

    import ProjectCard from "$lib/ProjectCard.svelte";

    let fl = base + "/imgs/other/fl.png";

    let pixel = base + "/imgs/other/pixel.png";
    let pixel1 = base + "/imgs/other/pixel-1.png";
    let pixel2 = base + "/imgs/other/pixel-2.png";

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
            imgSet={[pixel,pixel1,pixel2]}
            description="Pixel art for practice and game development. Include animation and other technics."
    />

</div>