<script>
    import { base } from "$app/paths";
</script>

<div>
    <h1>About Me / 自我介绍</h1>
    <div class="text">
        <p>
            My name is Jianchun Zhou and I am currently studying in Dalhousie as a fourth-year student in the Department
            of Computer Science. From July 2021 to December 2022, I participated in the Co-op project as a software
            developer, work in the data department of CEOTR (Coastal Environmental Observation Technology and Research).
        </p>
        <p>
            I am also a gamer, I enjoy the process of playing games, and at the same time I learn and think from it.
            I also develop some mini games on spare time, and participate in Game Jams.
            These experiences have gradually broadened my views and allowed me to study games from a developer's point of view,
            which led me to a deeper understanding.
        </p>

        <p>
            Hi！我的名字是周洊醇，目前就读于加拿大哈利法克斯的达尔豪斯大学，是一名大四计算机科学系的学生。
            在校期间，我曾在CEOTR参加过Co-op实习项目，负责网页前端开发与维护。也曾担任达尔豪斯游戏设计协会主席。
        </p>
        <p>
            同时，我也是一名游戏爱好者，我享受玩游戏的过程，同时也会从中学习与思考。平日里我也会做一些小游戏，积极参与Game Jam等活动。
            这些经历逐渐拓宽了我的视野，使我能够以开发者的角度去研究游戏，并让我对游戏有了更深入的了解。
        </p>

    </div>
    <div class="profile">
        <img class="profile-img" src="{base}/imgs/about/profile.jpg" alt="profile img"/>
    </div>

</div>

<style>
    .text {
        display: inline-block;
        width: 70%;
        height: 20rem;
    }

    .profile {
        display: inline-block;
        float: right;
        width: 20%;
        height: 20rem;
        text-align: center;
        overflow: hidden;
    }

    .profile-img {
        width: 100%;
        height: auto;
    }

    p {
        font-size: 120%;
    }
</style>


