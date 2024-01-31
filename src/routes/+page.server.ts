import type { CardInfo, Product } from "$lib/types/types"
import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const cardResponse = await fetch("/api/support")
  const cardInfo = (await cardResponse.json()) as CardInfo[]

  const productResponse = await fetch("/api/products")
  const products = (await productResponse.json()) as Product[]

  return { cardInfo, products }
}) satisfies PageServerLoad
