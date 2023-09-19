<script>
    import { base } from "$app/paths";
</script>

<nav>

    <ul>
        <li><a href="{base}/">About Me</a></li>
        <li><a href="{base}/personal">Personal Projects</a></li>
        <li><a href="{base}/gamejam">Game Jam Projects</a></li>
        <li><a href="{base}/ceotr">CEOTR Projects</a></li>
<!--        <li><a href="{base}/other">Other Projects</a></li>-->
    </ul>

</nav>

<style>

    ul {
        margin: 2rem auto 3rem;
        width: 800px;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    }

    a {
        color: gray;
        text-decoration: none;
        font-weight: bold;
        transition: 0.3s;

    }
    a:hover {
        color: aqua;
    }

</style>