import { readable, writable } from "svelte/store";


export let chatMessages = writable([
    {
        id: "asjnfdoijnasoidfj",
        userMessage: true,
        text: "lorem ipsum dolores"
    },
    {
        id: "asjnidfj",
        userMessage: false,
        text: "lorem ipsum dolores"
    },
    {
        id: "asjn askjdhihasghid idfj",
        userMessage: false,
        text: "lorem ipsum kajsndfojnsdijkn dolores"
    }
])

export const chatInfo = readable(
    {
        id: 1,
        ownerToken: 'something something',
        title: 'Apple'
    }
)
