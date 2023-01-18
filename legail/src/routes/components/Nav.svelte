<script>
	import { loginState } from "../stores/appState";
</script>



<div class="navigation">
    {#if $loginState}
        <button on:click={loginState.change}>Logout</button>
    {:else}
        <button on:click={loginState.change}>Login</button>
    {/if}
</div>

<style>
    .navigation {
        display: flex;
        justify-content: end;
        padding: 4% 5%;
        background-color: darkgrey;
    }
</style>