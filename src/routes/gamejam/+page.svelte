<script>
    import { base } from "$app/paths";

    import ProjectCard from "$lib/ProjectCard.svelte";

    let sheep = base + "/imgs/gamejam/sheep.png";
    let sheep1 = base + "/imgs/gamejam/sheep-1.png";
    let sheep2 = base + "/imgs/gamejam/sheep-2.png";
    let sheep3 = base + "/imgs/gamejam/sheep-3.png";

    let loop = base + "/imgs/gamejam/loop.png";
    let loop1 = base + "/imgs/gamejam/loop-1.png";
    let loop2 = base + "/imgs/gamejam/loop-2.png";
    let loop3 = base + "/imgs/gamejam/loop-3.png";
    let loop4 = base + "/imgs/gamejam/loop-4.png";

    let root = base + "/imgs/gamejam/root.jpg";
    let root1 = base + "/imgs/gamejam/root-1.png";
    let root2 = base + "/imgs/gamejam/root-2.jpg";
    let root3 = base + "/imgs/gamejam/root-3.png";

</script>

<div>
    <h1>Game Jam Projects</h1>

    <ProjectCard
            title="Atlantic Game Jam (https://itch.io/jam/atlantic-game-jam/rate/1421492)"
            imgSet={[sheep,sheep1,sheep2,sheep3]}
            description="'Bite Sized Justice', a 2D platform game built by Unity. The Atlantic Game Jam is 48 hours event held by Ubisoft, and the topic is 'with great power comes great responsibility.' We form a group of 6 (4 programmers and 2 artists). In the programmer's role, I worked on the following parts: game structure design, merge conflict fixing, player controller, camera follows, tilemap editing, audio design, player and enemy’s animator, UI design, etc. The background of the game, in brief, is the sheep (player) who wants to rescue his friends in the wolf's territory. Whenever the player saves a sheep, the total health will get one. Health is closely related to the final score. To get the highest score, the player must rescue all the sheep and avoid all damage from wolves or traps. As a result of this Game Jam, we get an overall ranking of 9."
    />

    <ProjectCard
            title="Newbies Jam (https://cloudrendering.unity.cn/share/cdce2cff92ebd9ae)"
            imgSet={[loop,loop1,loop2,loop3,loop4]}
            description="'One Way Out', a 2D game built by Unity. The Newbies Jam is one week event held by Unity China, and the topic is 'Loop.' We form a group of 3 (3 programmers). In the programmer's role, I worked on the following parts: UI programming, audio controller, particle design, art design, audio design,  UI design, etc. Compared with other games, the player no longer controls the main character but controls a circular spaceship to rotate left and right. Players can bounce on the platform, and they're three different platforms: the gray platform does nothing but slightly decrease the elastic energy, the green platform will dramatically increase the elastic energy, and the red platform will decrease the elastic energy. When the player collects all three gears left on the map, the escape gate at the start point will open."
    />

    <ProjectCard
            title="Global Game Jam (https://globalgamejam.org/2023/games/roots-returning-ordeal-squares-4)"
            imgSet={[root,root1,root2,root3]}
            description="'R.O.O.T.S: Returning Ordeal Of The Squares', is a 2D top-down puzzle game built by unity. The theme of this Global Game Jam is 'root'. Our team consisted of 6 people (3 programmers, 1 artist, 1 level designer, and 1 narrative designer). In my role as a programmer, I implemented player and enemy movement and behavior logic, added interaction logic to props, and designed and implemented boss battles. Additionally, I was involved in most of the art design and audio design. This game tells the story of a Byte (the player) who, upon learning that his world is about to be destroyed by the Demon King of Roots, ascends the Tower of Bytes and obtains the Square Crown to save the world. In total, it consists of 3 chapters and 8 levels that progressively increase in difficulty. The core of the game is to increase or decrease your own bytes (e.g. square or open root) in order to reach the endpoint and match the bytes required for the endpoint."
    />

</div>