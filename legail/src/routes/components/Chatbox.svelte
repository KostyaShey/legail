<script>

import { chatInfo, chatMessages } from "../stores/chatSession";
import { slide } from 'svelte/transition';
import ChatTitle from "./ChatTitle.svelte";
import ChatHistory from "./ChatHistory.svelte";

let minimized = false;
const minimizedToggle = () => {minimized = !minimized;}



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

<div transition:slide class="chatbox default-container">
    
    <ChatTitle title={$chatInfo.title} minimizedToggle={minimizedToggle} minimizedState={minimized}/>
    
    {#if !minimized}
        <div transition:slide>
            <ChatHistory chatMessages={chatMessages}/>
            <div class="chatInput">
                <input type="input" bind:value={chatInput} name="name" />
                <button on:click={submitMessage}>></button>
            </div>
        </div>
    {/if}
    
</div>


<style>
    .chatbox {
        height: auto;
    }

    .chatInput {
		display: grid;
		grid-template-columns: repeat(2, 85% 5%);
		grid-gap: 5%;
        padding: 5% 5%;
	}
    button {
        width: 2rem;
        height: 2rem;
    }
    input {
        height: 90%;
        width: 100%;
        border: none;
        background: transparent;
        border-bottom: 2px solid black;
    }
    
    
</style>