import { EPayment, type Cart } from "$lib/types/types"
import { writable, type Writable } from "svelte/store"

const cart: Cart = {
  products: [],
  payment: EPayment.Paypal,
  total: 0,
}

const cartListStore: Writable<Cart> = writable(cart)

export { cartListStore }
