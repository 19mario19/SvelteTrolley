import type { LayoutServerLoad } from "./$types"
import type { Props } from "$lib/types/types"
import logo from "$lib/images/logo.svg"

const props: Props = {
  logo: logo,
  navItems: ["Home", "About", "Shop", "Donate", "Contact"],
}

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/notification")
  const notification = await response.json()
  

  return { props, notification }
}) satisfies LayoutServerLoad
