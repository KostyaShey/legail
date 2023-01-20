import { subscribe } from "svelte/internal";
import { writable, readable } from "svelte/store";



function createLoginState() {
    const {subscribe, update} = writable (false);

    return {
        subscribe,
        change: () => update(n => !n)
    }

}

export const loginState = createLoginState();

export const menuOptions = readable(["Questions", "Profile", "Settings", "Your Mom"])