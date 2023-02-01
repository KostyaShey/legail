<script>
    import { slide } from 'svelte/transition';
</script>

<div transition:slide class="loginArea default-container centered">
    <p>
        Tired of reading contracts?<br />
        Ask our AI to read them for you! <br />
        It will answer any of your questions related to them!
    </p>
</div>

<style>
    .loginArea {
        flex-direction: column;
        height: 10vh;
        padding: 3% 5%;
        font-size: 1rem;
    }

</style>