<script>
    import { base } from "$app/paths";

    import ProjectCard from "$lib/ProjectCard.svelte";

    let space =  base + "/imgs/personal/space.png";
    let space1 =  base + "/imgs/personal/space-1.png";
    let space2 =  base + "/imgs/personal/space-2.png";
    let space3 =  base + "/imgs/personal/space-3.png";
    let space4 =  base + "/imgs/personal/space-4.png";

    let portfolio =  base + "/imgs/personal/this.png";
    let portfolio1 =  base + "/imgs/personal/this-1.png";

</script>

<div>
    <h1>Personal Projects</h1>

    <ProjectCard
            title="Space Fighter"
            imgSet={[space,space1,space2,space3,space4]}
            description="A 2D pixel space fighter built by Unity. The player needs to avoid damage by enemies and protect the deck. Whenever the player or deck takes damage, the entire health will drop, and when the health goes down to 0, the game is over. The player can purchase and gear up powerful items in the store. The coin can be dropped by the enemy. The stronger the enemy is, the more coin will be dropped. The boss will show up when the timer on the left goes down to zero. It will be more challenging, but it is a chance to gain more coins."
    />

    <ProjectCard
            title="My Portfolio Website"
            imgSet={[portfolio,portfolio1]}
            description="This website is built by Svelte-kit. As a portfolio, it records all my projects, which include my Co-op term projects, Game Jam projects, personal projects, etc. It is also a recap of the Svelte knowledge I learned during the Co-op term. The main component of this website is the project card. I modularized each project as a project card. Each project card has three parts: title, image viewer, and description. The modularization lets me post new projects quicker, and easy to maintain the website. In further development, I will try to add a bilingual function and be able to switch between English and Chinese."
    />
</div>