<script>
    import { loginState } from "../stores/appState";
    import { menuOptions } from "../stores/appState";
    import { slide } from 'svelte/transition';

</script>

<div class="menu">
    <div class="loginArea" transition:slide>
        {#if $loginState}
            <p>Currently logged in as "User"</p><button on:click={loginState.change}>Logout</button>
        {:else}
            <p>You must log in in order to see menu options</p><button on:click={loginState.change}>Login</button>
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
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 1px 5px 10px black;
    }
    .loginArea {
        display: flex;
        justify-content: end;
        vertical-align: middle;
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