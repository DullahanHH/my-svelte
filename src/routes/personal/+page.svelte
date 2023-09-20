<script>
    import { base } from "$app/paths";

    import ProjectCard from "$lib/ProjectCard.svelte";

    let td0 =  base + "/imgs/personal/td0.png";
    let td1 =  base + "/imgs/personal/td1.png";

    let s0 =  base + "/imgs/personal/survivor0.png";
    let s1 =  base + "/imgs/personal/survivor1.png";

    let space =  base + "/imgs/personal/space.png";
    let space1 =  base + "/imgs/personal/space-1.png";
    let space2 =  base + "/imgs/personal/space-2.png";
    let space3 =  base + "/imgs/personal/space-3.png";
    let space4 =  base + "/imgs/personal/space-4.png";

    let portfolio =  base + "/imgs/personal/this.png";
    let portfolio1 =  base + "/imgs/personal/this-1.png";

</script>

<div>
    <h1>Personal Projects / 个人项目</h1>

    <ProjectCard
            title="Vertical Tower Defence"
            imgSet={[td0,td1]}
            textEN="A 3D tower defence game built by Unity. Player need to build turrets to stop the enemies reach the base.
                    Differing from traditional tower defense, the player cannot actively move the viewpoint,
                    when the enemy arrives at a certain threshold at the bottom of the screen, the viewpoint will move downward.
                    As the view goes down, the difficulty of the game increases."
            textCN="使用Unity开发的3D无尽塔防游戏（未完成）。玩家需要建造炮塔阻止从传送门出来的敌人进入最下方的基地，
                    区别于传统塔防，玩家无法主动移动视角，当敌人抵达屏幕下方一定的临界点时，视角会向下移动，所有视野外的炮塔会被立即摧毁，
                    敌人传送门不受影响。并且随着视野向下移动，可能会解锁难度更高的敌人传送门。"
    />

    <ProjectCard
            title="Survivor Game"
            imgSet={[s0,s1]}
            textEN="A 3D survivor game built by Unity. Players need to control the vehicle to survive as long as possible in the map,
                    by defeating the enemy will have a chance to obtain accessories, the use of which can enhance the vehicle's performance.
                    Later in the game, boss enemy will appear and have some impact on the battlefield."
            textCN="使用Unity开发的3D幸存者游戏（未完成）。玩家需要操控战车在地图中存活尽可能多的时间，通过击败敌人有几率会获得配件，
                    使用配件可以增强战车。除了普通敌人和精英敌人，还会周期性出现Boss，Boss可能会对战局整体造成一定影响，对玩家造成阻碍。"
    />

    <ProjectCard
            title="Space Fighter"
            imgSet={[space,space1,space2,space3,space4]}
            textEN="A 2D pixel space fighter built by Unity. The player needs to avoid damage by enemies and protect the deck.
                    The player can purchase and gear up powerful items in the store. The coin can be dropped by the enemy.
                    The stronger the enemy is, the more coin will be dropped. The boss will show up when the timer on the left goes down to zero."
            textCN="使用Unity开发的2D太空飞行游戏。玩家需要躲避敌人攻击的同时保护舰桥，玩家与舰桥共享血量，血量为零时游戏结束。
                    通过击败敌人掉落的硬币可以用来升级武器或购买技能。当倒计时归零时，会自动进入Boss战。"
    />

    <ProjectCard
            title="My Portfolio Website"
            imgSet={[portfolio,portfolio1]}
            textEN="This website is built by Svelte-kit. As a portfolio, it records all my projects, which include my Co-op term projects, Game Jam projects, personal projects, etc.
                    It is also a recap of the Svelte knowledge I learned during the Co-op term. The main component of this website is the project card.
                    I modularized each project as a project card. The modularization lets me post new projects quicker, and easy to maintain the website."
            textCN="使用Svelte框架开发的个人作品集网站。该作品集网站记录了我的个人项目，实习项目，Game Jam项目等。
                    网站的主要组成是项目卡片，模块化的管理使得更新与维护更加的快捷方便。
                    同时，该网站也是对实习期间学到的Svelte知识的巩固与复习。"
    />
</div>