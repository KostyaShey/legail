<script>
    import UserConversations from "./components/UserConversations.svelte";
    import LoginPage from "./components/LoginPage.svelte";
    import { loginState } from "./stores/appState";
</script>


{#if $loginState}
    <UserConversations />
{:else}
    <LoginPage />
{/if}

<style>
    .title {
        padding-bottom: 5%;
        text-align: center;
    }
</style>