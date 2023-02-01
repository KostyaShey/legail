<script>
    import UserConversations from "./components/UserConversations.svelte";
    import { loginState } from "./stores/appState";
    import ChatboxDemo from "./components/ChatboxDemo.svelte";
</script>


{#if $loginState}
    <UserConversations />
{:else}
    <ChatboxDemo />
{/if}

<style>
    .title {
        padding-bottom: 5%;
        text-align: center;
    }
</style>