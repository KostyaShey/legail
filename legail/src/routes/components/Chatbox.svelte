<script>

import { chatInfo, chatMessages } from "../stores/chatSession";
import { slide } from 'svelte/transition';
import ChatTitle from "./ChatTitle.svelte";
import ChatHistory from "./ChatHistory.svelte";
import ChatInput from "./ChatInput.svelte";

let minimized = false;
const minimizedToggle = () => {minimized = !minimized;}

const defaultReply = {
        id: crypto.randomUUID(),
        userMessage: false,
        text: "I can't answer your question for now. This is just a Frontend Mock-Up."
    }

const addDefaultReply = () => {
		$chatMessages = [...$chatMessages, defaultReply];
};

const addToMessages = (chatObject) => {
		$chatMessages = [...$chatMessages, chatObject];
        addDefaultReply();
};



</script>

<div transition:slide class="chatbox default-container">
    
    <ChatTitle title={$chatInfo.title} minimizedToggle={minimizedToggle} minimizedState={minimized}/>
    
    {#if !minimized}
        <div transition:slide>
            <ChatHistory chatMessages={chatMessages}/>
            <ChatInput addToMessages={addToMessages}/>
        </div>
    {/if}
    
</div>


<style>
    .chatbox {
        height: auto;
    }


    
    
</style>