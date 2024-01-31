import type { PageServerLoad, Actions } from "./$types"
import type { ContactForm } from "$lib/types/types"

let contactForm: ContactForm

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/contact")
  const contactCards = await response.json()

  return { contactCards }
}) satisfies PageServerLoad

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")

    if (name && email && message) {
      contactForm = {
        name,
        email,
        message,
      } as ContactForm
    }
  },
} satisfies Actions
