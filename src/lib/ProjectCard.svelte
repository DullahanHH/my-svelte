<script>
    export let title;
    export let img;
    export let description;
</script>

<div class="container">
    <h2>{title}</h2>
    <img src={img} alt="image preview"/>
    <p>{description}</p>
</div>

<style>
    .container {
        background: lightgray;
        border-radius: 25px;
        padding: 1rem;
        margin: 2rem 0;
    }
</style>