<script>
    import { loginState } from "../stores/appState";
    import { menuOptions } from "../stores/appState";
    import { slide } from 'svelte/transition';

</script>

<div class="menu default-container">
    <div class="loginArea" transition:slide>
        {#if $loginState}
            <button on:click={loginState.change}>Logout</button>
        {:else}
            <button on:click={loginState.change}>Login</button>
        {/if}
    </div>
    {#if $loginState}
        <div class="menuOptions" transition:slide>
            {#each $menuOptions as option}
                <div class="menuOption">
                    <h4>{option}</h4>
                </div>
            {/each}
        </div>
    {/if}

</div>


<style>
    .menu {
        padding: 4% 5%;
        margin-bottom: 3%;
        box-shadow: 1px 5px 10px black;
    }
    .loginArea {
        display: flex;
        justify-content: end;
        vertical-align: top;
        gap: 3%;
    }
    .menuOption {
        text-align: end;
        margin: 5% 0%;
    }
    button {
        min-width: 4rem;
    }
</style>