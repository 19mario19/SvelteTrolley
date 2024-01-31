<script lang="ts">
  import Container from "$lib/components/utils/Container.svelte"
  import type { LayoutData } from "./$types"
  import { page } from "$app/stores"

  export let data: LayoutData
</script>

<div class="section1">
  <Container>
    <h1>{$page.data?.title || "No such page!"}</h1>
  </Container>
</div>
<Container>
  <slot />
</Container>

<style>
  .section1 {
    background-color: var(--primary-color);
    padding: 2rem 0;
  }

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 600;
  }
</style>
