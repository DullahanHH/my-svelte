<script>
    import ProjectCard from "$lib/ProjectCard.svelte";

    import sheep from "$lib/assets/sheep.png";
    import sheep1 from "$lib/assets/sheep-1.png";
    import sheep2 from "$lib/assets/sheep-2.png";
    import sheep3 from "$lib/assets/sheep-3.png";

    import loop from "$lib/assets/loop.png";
    import loop1 from "$lib/assets/loop-1.png";
    import loop2 from "$lib/assets/loop-2.png";
    import loop3 from "$lib/assets/loop-3.png";
    import loop4 from "$lib/assets/loop-4.png";

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

</div>