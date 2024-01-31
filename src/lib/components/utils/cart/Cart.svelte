<script lang="ts">
  import { browser } from "$app/environment"
  import { cartListStore } from "$lib/store/cartListStore"
  import { CCartStore, showCartStore } from "$lib/store/showCartStore"
  import type { CartItem } from "$lib/types/types"
  import { flip } from "svelte/animate"


  // Toggles and disables overflow of the cart
  const toggleVisibiliy = new CCartStore()
  function toggle() {
    toggleVisibiliy.switch()
  }
  $: showCart = $showCartStore
  $: if (browser) {
    if (!showCart) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="wrapper-container" class:showCart on:click|self={toggle}>
  <div class="wrapper">
    <div class="top">
      <h3>Your Cart</h3>
      <button on:click={toggle}>X</button>
    </div>

    <div class="cart">
      {#each $cartListStore.products as cartItem (cartItem.id)}
        <div animate:flip class="cart-item">
          <img src={cartItem.img} alt={cartItem.title} />
          <div class="item-details">
            <p>{cartItem.title}</p>
            <p>Price: ${cartItem.price}</p>
            <p>Quantity: {cartItem.quantity}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="cart-summary">
      <p>Total Items: <strong>{$cartListStore.products.length}</strong></p>
      <p>Payment Method: <strong>{$cartListStore.payment}</strong></p>
      <p>Subtotal: <strong>$ {$cartListStore.total.toFixed(2)}</strong></p>
      <button>Continue to Checkout</button>
    </div>
  </div>
</div>

<style>
  .wrapper-container {
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    justify-content: flex-end;

    background-color: var(--primary-05-color);
  }

  .wrapper {
    min-width: 400px;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-left: 1px solid var(--gray-color);
  }

  .wrapper > * {
    padding: 1rem 2rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-color);
  }

  .top > * {
    font-weight: bold;
  }

  .cart {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    align-self: flex-start;
  }

  .cart-item {
    display: flex;
    gap: 20px;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
  }

  .cart-item img {
    max-width: 100px;
    height: 70px;
    width: 50px;
    object-fit: cover;

    border-radius: 5px;
  }

  .item-details {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .cart-summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid var(--gray-color);
  }

  .cart-summary > p {
    display: flex;
    justify-content: space-between;
  }

  .cart-summary button {
    background-color: var(--secondary-color);
    color: white;
    padding: 0.5rem;
    font-weight: bold;
    border-radius: 5px;
  }

  .cart-summary button:hover {
    background-color: var(--primary-color);
    transition: all 180ms ease-in;
  }

  .showCart {
    display: none;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .wrapper {
      width: 100%;
    }
  }
</style>
