<script>

    export let addToMessages;

    let chatInput = '';

    function submitMessage() {
        
        const chatObject = {
            id: crypto.randomUUID(),
            userMessage: true,
            text: chatInput
        }
        
        addToMessages(chatObject);
        
        chatInput = ''

    };

</script>

<div class="chatInput">
    <input type="input" bind:value={chatInput} />
    <button on:click={submitMessage}>></button>
</div>

<style>

    .chatInput {
            display: grid;
            grid-template-columns: repeat(2, 85% 5%);
            grid-gap: 5%;
            padding: 5% 5%;
        }

    input {
        height: 90%;
        width: 100%;
        border: none;
        background: transparent;
        border-bottom: 2px solid black;
    }

</style>