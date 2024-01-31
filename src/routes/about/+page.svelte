<script lang="ts">
  import type { PageData } from "./$types"
  import type { CardInfo, Tuple } from "$lib/types/types"

  export let data: PageData
  const cardInfo: CardInfo[] = data.cardInfo
  const components: Tuple[] = data.components
  const ownersCards: CardInfo[] = data.ownersCards
</script>

{#each components as item}
  <svelte:component this={item.component} {cardInfo} {ownersCards} />
{/each}
