import { SvelteComponent } from "svelte"

type Props = {
  title?: string
  logo?: string
  navItems: string[]
}

type CardInfo = {
  title?: string
  img?: string
  description?: string | {}
  buttonName?: string
}

type CardInfoDetailed = CardInfo & {
  description: {
    content: string[]
    line?: string
    author?: string
    companyName?: string
  }
}
type Tuple = {
  name: string
  component: SvelteComponent
}

enum Tags {
  Gift = "Gift Card",
  Tents = "Tents",
  Accessories = "Accessories",
  Packs = "Packs",
}

type TagsType = Tags.Accessories | Tags.Gift | Tags.Packs | Tags.Tents

type Product = {
  id: string | number
  sale: boolean
  img: string
  title: string
  price: number
  oldPrice?: number
  descriptionTitle: string
  description: string
  featured?: boolean
  tags: TagsType[]
  quantity?: number
}

type CartItem = Pick<Product, "id" | "price" | "title" | "quantity" | "img">

enum EPayment {
  Paypal = "PayPal",
  Cash = "Cash",
}

type Payment = EPayment.Paypal | EPayment.Cash

type Cart = {
  products: CartItem[]
  payment: Payment
  total: number
}

type ContactForm = {
  name: string
  email: string
  message: string
}

export type {
  Props,
  CardInfo,
  CardInfoDetailed,
  Product,
  Tuple,
  TagsType,
  CartItem,
  Cart,
  ContactForm,
}
export { Tags, EPayment }
