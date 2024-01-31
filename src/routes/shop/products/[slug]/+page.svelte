<script lang="ts">
  import type { PageData } from "./$types"
  import CProduct from "$lib/components/Shop/Product/Product.svelte"
  import type { Product } from "$lib/types/types"
  export let data: PageData
  const product: Product = data?.product
</script>

<CProduct {product} />
