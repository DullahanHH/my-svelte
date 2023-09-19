<script>
    export let title;
    export let imgSet;
    export let description;

    let imgNum = 0;
    let selectedImg = imgSet[imgNum];

    function SwitchImgRight() {
        let nextNum = imgNum + 1;
        if (nextNum >= imgSet.length) {
            imgNum = 0;
            selectedImg = imgSet[0];
        } else {
            imgNum++;
            selectedImg = imgSet[nextNum];
        }
    }

    function SwitchImgLeft() {
        let nextNum = imgNum - 1;
        if (nextNum < 0) {
            imgNum = imgSet.length - 1;
            selectedImg = imgSet[imgNum];
        } else {
            imgNum--;
            selectedImg = imgSet[nextNum];
        }
    }
</script>

<div class="container">
    <h2>{title}</h2>


    <div class="image-container">
        <div class="btn">
            <button on:click={SwitchImgLeft}><i class="arrow left"></i></button>

        </div>
        <img class="image" src={selectedImg} alt="image preview"/>
        <div class="btn">
            <button on:click={SwitchImgRight}><i class="arrow right"></i></button>
        </div>
    </div>


    <p>{description}</p>
</div>

<style>
    .container {
        background: #f0f0f0;
        border-radius: 25px;
        padding: 1rem;
        margin: 2rem 0;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30rem;
    }

    .image {
        display: block;
        vertical-align: middle;
        margin: auto;
        width: 80%;
        max-width: 60rem;
        max-height: 30rem;
    }

    .btn {
        margin: 1rem;
        padding: 1rem;
    }

    button {
        padding: 0.6rem 1rem;
        border-radius: 25px;
        border: none;
        transition: 0.2s;
    }

    button:hover {
        background: gray;
    }

    .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }

    .left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }

    .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
</style>