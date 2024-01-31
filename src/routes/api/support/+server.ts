import type { RequestHandler } from "./$types"
import type { CardInfo } from "$lib/types/types"
import circleImage from "$lib/images/Home/Section2/circle.svg"
import triImage from "$lib/images/Home/Section2/tri.svg"
import recImage from "$lib/images/Home/Section2/rec.svg"
import { json } from "@sveltejs/kit"

const cardInfo: CardInfo[] = [
  {
    title: "SHOP PRODUCTS",
    img: circleImage,
    description:
      "Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!",
  },
  {
    title: "DONATE",
    img: triImage,
    description:
      "Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.",
  },
  {
    title: "BUY GIFT CARDS",
    img: recImage,
    description:
      "Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.",
  },
]
export const GET: RequestHandler = async () => {
  return json(cardInfo)
}
