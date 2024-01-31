<script lang="ts">
  import type { PageData } from "./$types"
  import Section1 from "$lib/components/Donate/Section1.svelte"
  import Section2 from "$lib/components/Donate/Section2.svelte"

  export let data: PageData
</script>

<Section1 />
<Section2 />