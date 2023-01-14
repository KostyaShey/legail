<script>

    let chatSession = {
        id: 1,
        ownerToken: 'something something',
        title: 'Apple',
        messages: [
            {
                id: "asjnfdoijnasoidfj",
                sender: "user",
                text: "lorem ipsum dolores"
            },
            {
                id: "asjnidfj",
                sender: "computer",
                text: "lorem ipsum dolores"
            }
        ]
    }

</script>

<div class="chatbox">
    <div class="chatTitle">
        <p>{chatSession.title}</p>
    </div>
    
    <div class="chatHistory">
        {#each chatSession.messages as message}
            <div class="chatMessage-{message.sender}">
                <p>{message.sender}: {message.text}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .chatbox {
        background-color: black;
        color: azure;
        border-radius: 1rem;
        margin: 1% 2%;
        overflow: hidden;
    }
    .chatHistory {
        margin: 0% 5% 5% 5%;
    }
    .chatTitle {
        background-color: grey;
        padding: 1% 5%;
    }
    .chatMessage-user {
        text-align: end;
    }
    .chatMessage-computer {
        color: green;
    }
</style>