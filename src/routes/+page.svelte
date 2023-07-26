<script>
    import { base } from "$app/paths";
</script>

<div>
    <h1>About Me</h1>
    <div class="text">
        <p>
            My name is Jianchun Zhou and I am currently studying in Dalhousie as a fourth-year student in the Department
            of Computer Science.
        </p>
        <p>
            From July 2021 to December 2022, I participated in the Co-op project and took the position of software
            development in the data department of CEOTR (Coastal Environmental Observation Technology and Research).
            During my tenure, I participated in the development of several website projects and gradually became
            familiar with the development mode in the workplace.
        </p>
        <p>
            In my spare time, I'm also interested in video games. It's not just about playing games, it's more about
            developing games. In game development, I know a thing or two about programming, art, and sound effects. I
            have done many demos of 2D games and participated in many Game Jams. With the help of demos and Game Jam, I
            continue to accumulate experience in game development and the ability to work in a team.
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


