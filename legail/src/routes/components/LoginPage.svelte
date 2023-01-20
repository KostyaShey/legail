<script>
    import { fade } from 'svelte/transition';
</script>

<div transition:fade class="loginArea">
    <p>You log in now!</p>
</div>

<style>
    .loginArea {
        display: flex;
        align-items:center;
        justify-content:center;
        margin: auto;
        background-color: crimson;
        color: azure;
        width: 80vw;
        height: 40vh;
        padding: 3% 5%;
        font-size: 4rem;
        border-radius: 1rem;
    }
</style>