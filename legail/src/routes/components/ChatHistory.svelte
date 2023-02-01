<script>

    import { fade } from "svelte/transition";

    export let chatMessages

    function returnSenderLabel (messageLabel) {
        return messageLabel ? "User:" : "Bot:";
    };

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

<div class="chatHistory">
    {#each $chatMessages as message}
        <div class:chatMessageUser={message.userMessage} class:chatMessageComputer={!message.userMessage}>
            {#if message.userMessage}
                <p>{message.text}</p>
            {:else}
                <p transition:typewriter>{message.text}</p>
            {/if}
            
            
        </div>
    {/each}
</div>

<style>

    .chatHistory {
        margin: 7% 5% 5% 5%;
    }
    .chatMessageUser {
        text-align: end;
    }
    .chatMessageComputer {
        color: green;
    }
    
</style>