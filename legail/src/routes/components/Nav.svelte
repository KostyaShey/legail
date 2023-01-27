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


<nav class="navigation default-container">
    <div class="title">
        {#if showTitle}
            <h1 transition:typewriter>L-AI-zy Lawyer</h1> 
        {/if}
    </div>
    
    <div class="clickableIcon" on:click={menuToggle}>
        <i class="mi mi-menu"><span class="u-sr-only"></span></i>
    </div>


</nav>

{#if showMenu}
    <Menu />
{/if}


<style>
    .navigation {
        display: flex;
        justify-content: space-between;
        align-items:center;
        height: auto;
        padding: 4% 5%;
    }

    .title {
        display: flex;
        justify-content: center;
    }

    h1 {
        font-size: 1.5rem;
        margin: auto;
    }

</style>