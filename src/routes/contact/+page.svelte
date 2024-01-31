<script lang="ts">
  import type { PageData } from "./$types"
  import Section1 from "$lib/components/Contact/Section1.svelte"
  import Section2 from "$lib/components/Contact/Section2.svelte"
  import type { CardInfo } from "$lib/types/types"

  export let data: PageData
  const contactCards: CardInfo[] = data?.contactCards
</script>

<Section1 {contactCards} />
<Section2 />
