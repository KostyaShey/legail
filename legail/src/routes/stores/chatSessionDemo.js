import { readable, writable } from "svelte/store";


export let chatMessages = writable([
    {
        id: "asjnfdoijnasoidfj",
        userMessage: true,
        text: "Do I owe the apps I bought on apple store"
    },
    {
        id: "asjnidfj",
        userMessage: false,
        text: "No you don't. Apple can remove them from your phone any time."
    },
    {
        id: "asjn askjdhihasghid idfj",
        userMessage: false,
        text: "In fact they can remove contacts from your phone."
    }
])

export const chatInfo = readable(
    {
        id: 1,
        ownerToken: 'something something',
        title: 'Apple'
    }
)
