import { subscribe } from "svelte/internal";
import { writable } from "svelte/store";



function createLoginState() {
    const {subscribe, update} = writable (false);

    return {
        subscribe,
        change: () => update(n => !n)
    }

}

export const loginState = createLoginState();