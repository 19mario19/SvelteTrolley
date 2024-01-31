import type { CardInfo } from "$lib/types/types"
import type { PageServerLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const cardResponse = await fetch("/api/reasons")
  const cardInfo = (await cardResponse.json()) as CardInfo[]

  const ownersResponse = await fetch("/api/owners")
  const ownersCards = (await ownersResponse.json()) as CardInfo[]

  return { cardInfo, ownersCards }
}) satisfies PageServerLoad
