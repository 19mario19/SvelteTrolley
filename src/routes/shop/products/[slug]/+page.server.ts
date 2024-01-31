import type { PageServerLoad } from "./$types"
import type { Actions } from "./$types"
import type { Product, CartItem } from "$lib/types/types"
import { EPayment } from "$lib/types/types"
import { CCart } from "$lib/classes/Cart"

let cart = new CCart({
  products: [],
  payment: EPayment.Paypal,
  total: 0,
})

export const load = (async ({ fetch, params: { slug } }) => {
  const response = await fetch(`/api/products/${slug}`)
  const product: Product = await response.json()

  const title: string = product.title

  let cartList = cart.getCartList()
  let productsLength = cart.getNumberProducts()

  return { title, product, cartList, productsLength }
}) satisfies PageServerLoad

export const actions = {
  default: async ({ request, fetch, params: { slug } }) => {
    const data = await request.formData()
    const quantity = data.get("quantity")

    const response = await fetch(`/api/products/${slug}`)
    const product: Product = await response.json()

    let cartItem: CartItem
    let howMany: number = 0


    if (quantity) {
      howMany = Number(quantity)
      cartItem = {
        id: product.id,
        price: product.price,
        title: product.title,
        quantity: Number(howMany) || 1,
        img: product.img,
      }
      cart.addItem(cartItem)
    }
  },
} satisfies Actions
