import type { RequestHandler } from "./$types"
import type { CardInfo } from "$lib/types/types"
import oneImage from "$lib/images/About/Section2/1.svg"
import twoImage from "$lib/images/About/Section2/2.svg"
import threeImage from "$lib/images/About/Section2/3.svg"
import fourImage from "$lib/images/About/Section2/4.svg"
import { json } from "@sveltejs/kit"

const cardInfo: CardInfo[] = [
  {
    title: "Lifetime Warranty",
    img: oneImage,
    description:
      "All our products — whether we make them or not — are backed by our lifetime warranty.",
  },
  {
    title: "Shopping Experience",
    img: twoImage,
    description:
      "All our products — whether we make them or not — are backed by our lifetime warranty.",
  },
  {
    title: "On-time Delivery",
    img: threeImage,
    description:
      "All our products — whether we make them or not — are backed by our lifetime warranty.",
  },
  {
    title: "Best in Class Service",
    img: fourImage,
    description:
      "All our products — whether we make them or not — are backed by our lifetime warranty.",
  },
]
export const GET: RequestHandler = async () => {
  return json(cardInfo)
}
