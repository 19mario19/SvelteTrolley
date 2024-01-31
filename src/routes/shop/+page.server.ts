import type { Product, TagsType } from "$lib/types/types"
import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/products")
  const allProducts: Product[] = await response.json()

  const responseTags = await fetch("/api/tags")
  const tags: TagsType[] = await responseTags.json()

  // returns first featured item
  const featuredProduct = allProducts.find(
    (product) => product.featured === true,
  ) as Product

  const products = allProducts.filter(
    (product) => product.id !== featuredProduct.id,
  )

  return { featuredProduct, products, tags }
}) satisfies PageServerLoad
