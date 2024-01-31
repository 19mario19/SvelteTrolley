import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import type { CardInfo } from "$lib/types/types"
import imageOne from "$lib/images/Contact/Section1/contact.svg"
import imageTwo from "$lib/images/Contact/Section1/support.svg"

const contactCards: CardInfo[] = [
  {
    img: imageOne,
    title: "Contact Us",
    description:
      "Just want to say hi? We'd love to hear from you. We love our customers and community! ",
    buttonName: "Send Us A Message",
  },
  {
    img: imageTwo,
    title: "Get Support",
    description:
      "Have an issue with an order or with a product you purchased from us? Fill out our support form.",
    buttonName: "Contact Support",
  },
]

export const GET: RequestHandler = async () => {
  return json(contactCards)
}
