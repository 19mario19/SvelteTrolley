<script lang="ts">
  import type { PageData } from "./$types"
  import type { Tuple, Product, TagsType } from "$lib/types/types"
  export let data: PageData
  const components: Tuple[] = data.components
  const product: Product = data.featuredProduct
  const products: Product[] = data.products
  const tags: TagsType[] = data.tags
</script>

{#each components as item}
  {#if item.name === "s1"}
    <svelte:component this={item.component} {product} />
  {/if}
  {#if item.name === "s2"}
    <svelte:component this={item.component} {products} {tags} />
  {/if}
{/each}
