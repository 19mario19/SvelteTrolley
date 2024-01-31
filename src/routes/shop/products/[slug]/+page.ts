import type { PageLoad } from "./$types"
import { cartListStore } from "$lib/store/cartListStore"
import { count } from "$lib/store/count"

import { CLocalStorage } from "$lib/store/localStorage/localStorage"
import type { Cart } from "$lib/types/types"

const ls: CLocalStorage<Cart> = new CLocalStorage("cart-list")

export const load = (async ({ data }) => {
  // does not sync if updated on the server
  count.set(data.productsLength)
  cartListStore.set(data.cartList)

  return { ...data }
}) satisfies PageLoad
