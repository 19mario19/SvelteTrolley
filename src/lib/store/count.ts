import { writable, type Writable } from "svelte/store"

const count: Writable<number> = writable(0)

export { count }
