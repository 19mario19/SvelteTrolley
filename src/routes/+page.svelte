<script lang="ts">
  import type { PageData } from "./$types"
  import Section1 from "$lib/components/Home/Section1.svelte"
  import Section2 from "$lib/components/Home/Section2.svelte"
  import Section3 from "$lib/components/Home/Section3.svelte"
  import Section4 from "$lib/components/Home/Section4.svelte"
  import Section5 from "$lib/components/Home/Section5.svelte"
  import type { CardInfo, Product } from "$lib/types/types"

  export let data: PageData

  const cardInfo: CardInfo[] = data.cardInfo
  const products: Product[] = data.products
</script>

<Section1 />
<Section2 {cardInfo} />
<Section3 />
<Section4 {products} />
<Section5 />
