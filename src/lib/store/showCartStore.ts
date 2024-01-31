import { writable, type Writable } from "svelte/store"

const showCartStore: Writable<boolean> = writable(true)

interface ICartStore {
  switch(): void
  on(): void
  off(): void
}

class CCartStore implements ICartStore {
  switch(): void {
    showCartStore.update((value) => (value = !value))
  }
  on(): void {
    showCartStore.set(true)
  }
  off(): void {
    showCartStore.set(false)
  }
}

export { showCartStore, CCartStore }
