<script>
    import { loginState } from "../stores/appState";
    import { onMount } from 'svelte';
    import Menu from "./Menu.svelte";

    let showTitle = false;
    onMount(() => {showTitle=true});

    let showMenu = false;
    const menuToggle = () => {showMenu = !showMenu}

    function typewriter(node, { speed = 1 }) {
            const valid = (
                node.childNodes.length === 1 &&
                node.childNodes[0].nodeType === Node.TEXT_NODE
            );

            if (!valid) {
                throw new Error(`This transition only works on elements with a single text node child`);
            };

            const text = node.textContent;
            const duration = text.length / (speed * 0.01);

            return {
                duration,
                tick: t => {
                    const i = Math.trunc(text.length * t);
                    node.textContent = text.slice(0, i);
                }
        };
    }



</script>


<nav class="navigation" class:noMarginBottom={showMenu}>
    <div class="title">
        {#if showTitle}
            <h1 transition:typewriter>L-AI-zy Lawyer</h1> 
        {/if}
    </div>
    
    <div class="menuToggle">
        {#if $loginState}
            <button on:click={menuToggle}><i class="mi mi-menu"><span class="u-sr-only"></span></i></button>
        {:else}
            <button on:click={menuToggle}><i class="mi mi-menu"><span class="u-sr-only"></span></i></button>
        {/if}
    </div>
</nav>

{#if showMenu}
    <Menu />
{/if}


<style>
    .navigation {
        display: flex;
        justify-content: space-between;
        height: 3vh;
        padding: 4% 5%;
        background: rgba(255, 255, 255, 0.8);
        margin-bottom: 3%;
        box-shadow: 1px 5px 10px black;
    }

    .noMarginBottom {
        margin-bottom: 0%;
    }

    .title {
        display: flex;
        justify-content: center;
    }

    .menuToggle {
        display: flex;
        justify-content: center;
    }

    h1 {
        font-size: 1.5rem;
        margin: auto;
    }
    button {
        background-color: transparent;
    }

    button:hover {
        box-shadow: 1px 3px 5px black;
    }
</style>