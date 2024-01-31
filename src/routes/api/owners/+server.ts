import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import type { CardInfo } from "$lib/types/types"
import imageOne from "$lib/images/About/Section4/1.png"
import imageTwo from "$lib/images/About/Section4/2.png"

const owners: CardInfo[] = [
  {
    img: imageOne,
    title: "John Doe",
    description:
      "John Doe, a London-based entrepreneur, seamlessly blends his love for nature with crafting essential hiking products. His creations reflect a passion for quality and sustainability, making him a trailblazer in the outdoor community.",
  },
  {
    img: imageTwo,
    title: "Jane Doe",
    description:
      "Jane Doe, an enthusiastic London hiker, actively contributes to the world of hiking essentials. Her work embodies creativity and environmental consciousness, inspiring others to embrace nature's beauty on their own transformative journeys.",
  },
]


export const GET: RequestHandler = async () => {
  return json(owners)
}
