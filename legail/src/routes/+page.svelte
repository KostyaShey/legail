<script>
    import Chatbox from "./components/Chatbox.svelte";
    import LoginPage from "./components/LoginPage.svelte";
    import { loginState } from "./stores/appState";

    let visible = false;

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
<div>
    <input type="checkbox" bind:checked={visible}> Toggle title
</div>

<div class="title">
    {#if visible}
        <h1 transition:typewriter>Welcome to Penis</h1>
    {/if}
</div>

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