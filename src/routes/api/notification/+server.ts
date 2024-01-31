import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async () => {
  const notificationList = [
    "Exciting news! Join us for a special event this Saturday.",
    "Check out our newest product! Now in stock!",
    "Discover exclusive deals on our website today!",
    "Limited-time offer: Get free shipping on all orders!",
    "New arrivals added to our collection - explore now!",
    "Join our loyalty program and earn rewards on every purchase!",
    "Don't miss out! Sign up for our newsletter for updates and promotions.",
    "Upgrade your gear with our top-rated products!",
    "Get ready for adventure with our outdoor essentials!",
    "Shop now and save big on selected items!",
  ]

  let notification =
    notificationList[Math.floor(Math.random() * notificationList.length)]

  return json(notification)
}
