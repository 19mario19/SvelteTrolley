import type { PageLoad } from "./$types"
import Section1 from "$lib/components/Shop/Section1.svelte"
import Section2 from "$lib/components/Shop/Section2.svelte"
import type { Tuple } from "$lib/types/types"

export const load = (async ({ data }) => {
  const title: string = "Shop Our Products"
  const components: Tuple[] = [
    { name: "s1", component: Section1 },
    { name: "s2", component: Section2 },
  ]

  return { ...data, title, components }
}) satisfies PageLoad

const prerender = true
