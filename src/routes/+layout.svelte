<script lang="ts">
  import "../app.css"
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import type { LayoutData } from "./$types"
  import Notification from "$lib/components/Notification.svelte"
  import Cart from "$lib/components/utils/cart/Cart.svelte"

  export let data: LayoutData
</script>

<div class="fixed">
  {#if data.notification}
    <Notification notificaiton={data.notification} />
  {/if}

  <Navbar data={data.props} />
</div>
<Cart />
<slot />
<Footer />

<style>
  .fixed {
    position: sticky;
    inset: 0 0;
    z-index: 999;
  }
</style>
