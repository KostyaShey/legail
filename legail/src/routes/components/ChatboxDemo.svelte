<script>

    import { chatInfo, chatMessages } from "../stores/chatSessionDemo";
    import { writable } from "svelte/store";
    import { slide } from 'svelte/transition';
    import { onMount } from "svelte";
    import ChatTitle from "./ChatTitle.svelte";
    import ChatHistory from "./ChatHistory.svelte";
    import ChatInputDemo from "./ChatInputDemo.svelte";
    
    let minimized = true;
    const minimizedToggle = () => {minimized = !minimized;}
    
    export let chatMessagesDemo = writable([])

    function playDemo () {
        const myTimeout = setTimeout(minimizedToggle, 2000);
        let counter = 0;
        const i = setInterval(function() {
                            $chatMessagesDemo = [...$chatMessagesDemo, $chatMessages[counter]];
                            counter++;
                            if(counter === $chatMessages.length) {
                                clearInterval(i);
                            }
                }, 2000);
        
        
    }

    onMount(() => {
        playDemo();
    }
    )
    
    
    </script>
    
    <div transition:slide class="chatbox default-container">
        
        <ChatTitle title={$chatInfo.title} minimizedToggle={minimizedToggle} minimizedState={minimized}/>
        
        {#if !minimized}
            <div transition:slide>
                <ChatHistory chatMessages={chatMessagesDemo}/>
                <ChatInputDemo/>
            </div>
        {/if}
        
    </div>
    
    
    <style>
        .chatbox {
            height: auto;
        }
    
    
        
        
    </style>