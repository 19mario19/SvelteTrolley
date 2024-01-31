<script lang="ts">
  import type { Product } from "$lib/types/types"

  export let product: Product
</script>
<div class="card">
  <div class="top">
    <a href={`/shop/products/${product.id}`}>
    <div class="overlay" />
      <img class:sale={product.featured} src={product.img} alt={product.title} />
    </a>
    {#if product.sale}
      <p class="sale">Featured item</p>
    {/if}
  </div>
  <div class="bottom">
    <h3>{product.title}</h3>
    <p class="price">
      $ {product.price.toFixed(2)} USD
    </p>
  </div>
</div>

<style>
  img {
    height: 285px;
    width: 100vw;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent, var(--primary-color));
    opacity: 0.85;
  }

  .sale {
    border-color: var(--secondary-color);
  }

  img,
  .card {
    border-radius: 5px;
  }

  .card {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    overflow: hidden;
    min-height: 100%;

    position: relative;
  }

  @media screen and (max-width: 717px) {
    .card {
      flex-direction: column;
      max-width: 100%;
      height: auto;
    }
  }


  .bottom {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    position: absolute;
    bottom: 20px;
    left: 30px;
    text-align: start;
  }

  .bottom > * {
    color: white;
  }

  p.sale {
    background-color: white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }

 h3 {
    font-weight: bold;
    font-size: 22px;
 }

  .top {
    position: relative;
  }

  p.sale {
    position: absolute;
    top: 15px;
    right: 15px;

    font-size: 16px;
  }
</style>
