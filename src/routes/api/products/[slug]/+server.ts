import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { products } from "$lib/db/products"

export const GET: RequestHandler = async ({ params: { slug } }) => {
  const product = products.find((product) => product.id === Number(slug))
  return json(product)
}
