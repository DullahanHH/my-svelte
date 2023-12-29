<script>
    import { base } from "$app/paths";

    import ProjectCard from "$lib/ProjectCard.svelte";

    let td0 =  base + "/imgs/personal/td0.png";
    let td1 =  base + "/imgs/personal/td1.png";

    let rs0 =  base + "/imgs/personal/rs0.png";
    let rs1 =  base + "/imgs/personal/rs1.png";
    let rs2 =  base + "/imgs/personal/rs2.png";
    let rs3 =  base + "/imgs/personal/rs3.png";
    let rs4 =  base + "/imgs/personal/rs4.png";

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
            textEN="A 3D endless tower defence game built by Unity (In progress). Player need to build turrets to stop the enemies reach the base.
                    Differing from traditional tower defense, the player cannot actively move the viewpoint,
                    when the enemy arrives at a certain threshold at the bottom of the screen, the viewpoint will move downward.
                    As the view goes down, the difficulty of the game increases."
            textCN="使用Unity开发的3D无尽塔防游戏（未完成）。玩家需要建造炮塔阻止从传送门出来的敌人进入最下方的基地，
                    区别于传统塔防，玩家无法主动移动视角，当敌人抵达屏幕下方一定的临界点时，视角会向下移动，所有视野外的炮塔会被立即摧毁，
                    敌人传送门不受影响。并且随着视野向下移动，可能会解锁难度更高的敌人传送门。"
    />

    <ProjectCard
            title="Racoon Shooter"
            imgSet={[rs0,rs1,rs2,rs3,rs4]}
            textEN="A 3D top-down roguelike shooting game developed using Unity. Players take on the role of an armed raccoon, collecting enough trash bags in a randomly generated forest.
                    The forest continuously spawns enemies, and players can enhance their survival chances by acquiring diverse abilities like bombs, smoke grenades, and healing from randomly spawned chests.
                    This project was the final group assignment for the CSCI 4168 course, covering the full process from game design documentation to final deployment within a month.
                    As a programmer, I implemented components like the UI manager, skill manager, and character controller, and for the first time, managed and edited audio using FMOD middleware."
            textCN="使用Unity开发的3D俯视角肉鸽射击游戏。玩家需要扮演一只用枪的浣熊，在随机生成的森林中收集足够数量的垃圾袋。
                    森林中会不断生成敌人，玩家可以通过获取随机生成的宝箱获取多样的技能如炸弹、烟雾弹、治疗等提高自己的生存率。
                    该项目作为CSCI 4168课程的最终小组项目，在一个月中经历了从游戏设计文档到最后游戏部署的完整过程。
                    作为程序员，我实现了UI管理器、技能管理器、角色控制器等组件，并首次使用FMOD中间件对音频实现了编辑与管理。"
    />

    <ProjectCard
            title="Space Fighter"
            imgSet={[space,space1,space2,space3,space4]}
            textEN="A 2D pixel space fighter built by Unity. The player needs to avoid damage by enemies and protect the deck.
                    The player can purchase and gear up powerful items in the store. The coin can be dropped by the enemy.
                    The stronger the enemy is, the more coin will be dropped. The boss will show up when the timer on the left goes down to zero.
                    Theoretically, this project was my first complete Unity project, where I experimented with traditional space flight games.
                    This included evolving enemy generation pools over time, a skill system, and random intensity and angles for coin generation."
            textCN="使用Unity开发的2D太空飞行游戏。玩家需要躲避敌人攻击的同时保护舰桥，玩家与舰桥共享血量，血量为零时游戏结束。
                    通过击败敌人掉落的硬币可以用来升级武器或购买技能。当倒计时归零时，会自动进入Boss战。
                    该项目理论上来说是我的第一个完整Unity项目，我在传统的太空飞行游戏上做了一些尝试，如敌人生成池随时间改变、
                    技能系统、金币生成时随机的力度和角度等。"
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