import type { RequestHandler } from "./$types"
import { json } from "@sveltejs/kit"
import { products } from "$lib/db/products"


export const GET: RequestHandler = async () => {
  return json(products, { status: 200 })
}


