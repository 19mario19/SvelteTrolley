import type { PageLoad } from "./$types"
import Section1 from "$lib/components/About/Section1.svelte"
import Section2 from "$lib/components/About/Section2.svelte"
import Section3 from "$lib/components/About/Section3.svelte"
import Section4 from "$lib/components/About/Section4.svelte"
import Section5 from "$lib/components/About/Section5.svelte"
import type { Tuple } from "$lib/types/types"

export const load = (async ({ data }) => {
  const components: Tuple[] = [
    { name: "s1", component: Section1 },
    { name: "s2", component: Section2 },
    { name: "s3", component: Section3 },
    { name: "s4", component: Section4 },
    { name: "s5", component: Section5 },
  ]

  return { ...data, components }
}) satisfies PageLoad


