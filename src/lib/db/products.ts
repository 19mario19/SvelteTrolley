import { Tags, type Product } from "$lib/types/types"

import greenBpImage from "$lib/images/products/green-bp.jpg"
import cardImage from "$lib/images/products/gift.jpg"
import tentImage from "$lib/images/products/tent.jpg"
import mugImage from "$lib/images/products/mug.jpg"
import blueBpImage from "$lib/images/products/blue-bp.jpg"

const products: Product[] = [
  {
    id: 0,
    title: "Gift Card",
    price: 25,
    descriptionTitle: "The Perfect Gift for Every Occasion",
    description:
      "Give the gift of choice with our versatile gift cards. Ideal for birthdays, holidays, or any special celebration.",
    img: cardImage,
    sale: false,
    tags: [Tags.Gift],
  },
  {
    id: 1,
    title: "White Tent",
    price: 200,
    oldPrice: 300,
    descriptionTitle: "Explore the Great Outdoors in Style",
    description:
      "Experience comfort and convenience with our spacious white tent. Perfect for camping adventures with family and friends.",
    img: tentImage,
    sale: true,
    featured: true,
    tags: [Tags.Tents],
  },
  {
    id: 2,
    title: "Tin Coffee Tumbler",
    price: 35,
    descriptionTitle: "Sip in Style Anywhere You Go",
    description:
      "Enjoy your favorite beverages on the move with our durable and stylish tin coffee tumbler. Stay caffeinated, stay chic.",
    img: mugImage,
    sale: false,
    tags: [Tags.Accessories],
  },
  {
    id: 3,
    title: "Blue Canvas Pack",
    price: 95,
    oldPrice: 145,
    descriptionTitle: "Adventure Awaits with the Blue Canvas Pack",
    description:
      "Embark on your next journey with our Blue Canvas Pack. Featuring ample storage space and durability, it's the perfect companion for explorers.",
    img: blueBpImage,
    sale: true,
    tags: [Tags.Packs],
  },
  {
    id: 4,
    title: "Green Canvas Pack",
    price: 125,
    oldPrice: 150,
    descriptionTitle: "Embrace Nature with the Green Canvas Pack",
    description:
      "Connect with the outdoors using our Green Canvas Pack. Designed for nature enthusiasts, it combines functionality and style for your adventures.",
    img: greenBpImage,
    sale: true,
    tags: [Tags.Packs],
  },
]

export { products }
