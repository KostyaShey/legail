<script>

    export let addToMessages;

    let chatInput = '';

    const handleKeypress = (event) => {
        if(event.keyCode == 13) {
            submitMessage()
        }
    }

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
    <input on:keypress={handleKeypress} class="inputText" type="input" bind:value={chatInput} />
    <button on:click={submitMessage}>></button>
</div>

<style>

    .chatInput {
            display: grid;
            grid-template-columns: repeat(2, 85% 5%);
            grid-gap: 5%;
            padding: 5% 5%;
        }

</style>