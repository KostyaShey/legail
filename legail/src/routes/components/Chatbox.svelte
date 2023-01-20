<script>

import { chatInfo, chatMessages } from "../stores/chatSession";
import { fade } from 'svelte/transition';
	import { debug } from "svelte/internal";

function returnSenderLabel (messageLabel) {
    return messageLabel ? "User:" : "Bot:";
};

let chatInput = '';

const addToMessages = (chatObject) => {
		$chatMessages = [...$chatMessages, chatObject];
};

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

<div transition:fade class="chatbox">
    <div class="chatTitle">
        <p>{$chatInfo.title}</p>
    </div>
    
    <div class="chatHistory">
        {#each $chatMessages as message}
            <div class:chatMessageUser={message.userMessage} class:chatMessageComputer={!message.userMessage}>
                <p>{returnSenderLabel(message.userMessage)} {message.text}</p>
            </div>
        {/each}
    </div>
    <div class="chatInput">
        <input type="input" bind:value={chatInput} name="name" />
        <button on:click={submitMessage}>></button>
    </div>
</div>


<style>
    .chatbox {
        background-color: rgb(167, 165, 165);
        color: azure;
        border-radius: 1rem;
        margin: auto;
        width: 90vw;
        height: auto;
        overflow: hidden;
    }
    .chatHistory {
        margin: 0% 5% 5% 5%;
    }
    .chatTitle {
        background-color: grey;
        padding: 1% 5%;
    }
    .chatMessageUser {
        text-align: end;
    }
    .chatMessageComputer {
        color: green;
    }
    .chatInput {
		display: grid;
		grid-template-columns: repeat(2, 88% 5%);
		grid-gap: 5%;
        padding: 2% 5%;
        margin-bottom: 5%;
	}
    button {
        width: 2rem;
        height: 2rem;
    }
    input {
        height: 100%;
        width: 100%;
        border: none;
        background: transparent;
        border-bottom: 2px solid black;
    }
    
    
</style>