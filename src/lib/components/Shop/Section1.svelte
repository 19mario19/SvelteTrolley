<script lang="ts">
  import type { Product } from "$lib/types/types"
  import FeaturedCard from "$lib/components/utils/product/FeaturedCard.svelte"

  export let product: Product
</script>
{#if product}
   <div class="section1">
     <FeaturedCard {product} />
   </div>
{/if}

<style>
  .section1 {
    display: flex;
    margin: 2rem 0;
  }
</style>
