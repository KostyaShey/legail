<script>
    import { fade, slide } from 'svelte/transition';
</script>

<div transition:slide class="loginArea default-container centered">
    <p>Tired of reading contracts?</p>
    <p>Ask our AI to read them for you! </p>
    <p>It will answer your qouestions about anything related to it!</p>
</div>

<style>
    .loginArea {
        flex-direction: column;
        height: 40vh;
        padding: 3% 5%;
        font-size: 1rem;
    }
</style>