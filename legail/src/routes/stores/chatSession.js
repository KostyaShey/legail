import { readable, writable } from "svelte/store";


export let chatMessages = writable([

])

export const chatInfo = readable(
    {
        id: 1,
        ownerToken: 'something something',
        title: 'Apple'
    }
)
