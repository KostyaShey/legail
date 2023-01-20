<script>
    import Chatbox from "./components/Chatbox.svelte";
    import LoginPage from "./components/LoginPage.svelte";
    import { loginState } from "./stores/appState";

</script>


{#if $loginState}
    <Chatbox />
{:else}
    <LoginPage />
{/if}

<style>
    .title {
        padding-bottom: 5%;
        text-align: center;
    }
</style>