import { writable } from 'svelte/store';

const auth = writable(false);

export default auth;