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

    let anxiety = base + "/imgs/gamejam/anxiety.png";
    let anxiety1 = base + "/imgs/gamejam/anxiety1.png";
    let anxiety2 = base + "/imgs/gamejam/anxiety2.png";
    let anxiety3 = base + "/imgs/gamejam/anxiety3.png";

</script>

<div>
    <h1>Game Jam Projects / Game Jam 项目</h1>

    <ProjectCard
            title="Atlantic Game Jam (https://itch.io/jam/atlantic-game-jam/rate/1421492)"
            imgSet={[sheep,sheep1,sheep2,sheep3]}
            textEN="'Bite Sized Justice', a 2D platform game built by Unity. The Atlantic Game Jam is 48 hours event held by Ubisoft,
                    and the topic is 'with great power comes great responsibility.' The background of the game, in brief, is the sheep (player) who wants to rescue his friends in the wolf's territory.
                    Players need to rescue as many sheep as possible and reach the goal. As the number of rescues increases, the difficulty of the game increase.
                    This was my first time participating in a Game Jam, and although we encountered issues like Git conflicts during the process, we ultimately resolved them."
            textCN="使用Unity开发的2D横版卷轴闯关游戏。该Game Jam由哈法育碧举办，主题为'能力越大责任越大'。玩家需要尽可能多的解救小羊并到达终点。
                    随着解救数量增加，玩家需要在保护小羊的同时营救更多的小羊，也使得躲避敌人和陷阱的难度增加。
                    这是我第一次参加Game Jam，尽管在过程中我们遇到了如Git冲突之类的问题，但最终问题得到了解决。"
    />

    <ProjectCard
            title="Newbies Jam (https://cloudrendering.unity.cn/share/cdce2cff92ebd9ae)"
            imgSet={[loop,loop1,loop2,loop3,loop4]}
            textEN="'One Way Out', a 2D game built by Unity. The Newbies Jam is one week event held by Unity China, and the topic is 'Loop.'
                    The player no longer controls the main character but controls a circular spaceship to rotate left and right.
                    Players can bounce on the platform, and they're three different platforms: the gray platform does nothing but slightly decrease the elastic energy,
                    the green platform will dramatically increase the elastic energy, and the red platform will decrease the elastic energy.
                    When the player collects all three gears left on the map, the escape gate at the start point will open."
            textCN="使用Unity开发的2D平台跳跃游戏。该Game Jam由中国Unity举办，主题为'循环'。玩家需要收集所有零件并抵达终点，玩家无法直接控制角色，而是控制空间站球体的旋转。
                    角色的重心指向空间站的中心，若角色触及空间站的核心或外壳，游戏都会立即结束。游戏中，分为三种平台，灰色平台、绿色平台和红色平台。
                    灰色平台为普通平台，玩家接触后弹性能量会正常的衰减。绿色平台会大幅增加弹性能量，而红色平台则会大幅减少弹性能量。"
    />

    <ProjectCard
            title="2023 Global Game Jam (https://dullahanhh.itch.io/roots)"
            imgSet={[root,root1,root2,root3]}
            textEN="'R.O.O.T.S: Returning Ordeal Of The Squares', is a 2D top-down puzzle game built by unity. The theme of this Global Game Jam is 'root'.
                    This game tells the story of a Byte (the player) who, upon learning that his world is about to be destroyed by the Demon King of Roots,
                    ascends the Tower of Bytes and obtains the Square Crown to save the world. In total, it consists of 3 chapters and 8 levels that progressively increase in difficulty.
                    The core of the game is to increase or decrease your own bytes (e.g. square or open root) in order to reach the endpoint and match the bytes required for the endpoint."
            textCN="使用Unity开发的2D俯视角解密闯关游戏。该Game Jam由Global Game Jam举办，主题为'Root'。
                    玩家需要谨慎思考如何使用关卡中的道具增减自身的字节来进行解密。游戏整体分为三章，第一章的作用是让玩家熟悉每一个道具的使用方法和交代背景，
                    第二章会将道具结合起来，实现更困难的关卡，第三章则为Boss战。"
    />

    <ProjectCard
            title="2024 Global Game Jam (https://cryintomato.itch.io/social-anxiety-simulator)"
            imgSet={[anxiety,anxiety1,anxiety2,anxiety3]}
            textEN="'Social Anxiety Simulator', is a 2D QTE game built by unity. The theme of this Global Game Jam is 'make me laugh'.
                    The player will take on the role of a social anxiety student and avoid social awkwardness by giving the professor the right reaction at the right time.
                    When the professor speaks the player does not react, but when the professor drinks coffee the player should react correctly."
            textCN="使用Unity开发的2D QTE游戏。该Game Jam由Global Game Jam举办，主题为'Make me laugh'。
                    玩家将扮演一个社恐学生，在恰当的时机给教授正确的反应来避免社交尴尬。
                    当教授讲话时玩家不做任何反应，但当教授喝咖啡时，玩家应该做出正确的反应。"
    />

</div>