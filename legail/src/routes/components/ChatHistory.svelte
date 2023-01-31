<script>

export let chatMessages

function returnSenderLabel (messageLabel) {
    return messageLabel ? "User:" : "Bot:";
};

</script>

<div class="chatHistory">
    {#each $chatMessages as message}
        <div class:chatMessageUser={message.userMessage} class:chatMessageComputer={!message.userMessage}>
            <p>{returnSenderLabel(message.userMessage)} {message.text}</p>
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