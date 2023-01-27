<script>
    import { fade } from 'svelte/transition';
</script>

<div transition:fade class="loginArea default-container">
    <p>You log in now!</p>
</div>

<style>
    .loginArea {
        display: flex;
        align-items:center;
        justify-content:center;
        height: 40vh;
        padding: 3% 5%;
        font-size: 4rem;
    }
</style>