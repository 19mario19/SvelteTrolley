<script lang="ts">
  import type { Product } from "$lib/types/types"

  export let product: Product
</script>

<div class="card">
  <div class="top">
    <img class:sale={product.sale} src={product.img} alt={product.title} />
    {#if product.sale}
      <p class="sale">SALE</p>
    {/if}
  </div>
  <div class="bottom">
    <h3>{product.title}</h3>
    <p class="price">
      $ {product.price.toFixed(2)} USD
      {#if product.oldPrice}
        <span class="crossed">
          {product.oldPrice.toFixed(2)} USD
        </span>
      {/if}
    </p>
    <a href={`/shop/products/${product.id}`}>
      <button>Details</button>
    </a>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-bottom: 2px solid var(--primary-color);
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

    max-width: 32%;
    min-height: 500px;

    margin: 0 auto;
  }

  @media screen and (max-width: 717px) {
    .card {
      flex-direction: column;
      max-width: 100%;
      height: auto;
    }
  }

  .top {
    flex: 2;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  button,
  p.sale {
    background-color: var(--secondary-color);
    color: white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
  button {
    font-weight: bold;

    margin-top: 1rem;
    transition: all 180ms ease-in;
  }
  button:hover {
    color: white;
    background-color: var(--primary-color);
  }

  span.crossed {
    text-decoration-line: line-through;
  }

  p.price,
  span.crossed {
    font-weight: bold;
  }

  span.crossed {
    color: var(--secondary-color);
  }

  .top {
    position: relative;
  }

  p.sale {
    position: absolute;
    top: 15px;
    right: 15px;

    font-size: 13px;
  }
</style>
