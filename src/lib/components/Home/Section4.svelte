<script lang="ts">
  import Container from "../utils/Container.svelte"
  import type { Product } from "$lib/types/types"
  import Card from "../utils/product/Card.svelte"

  export let products: Product[]
  export let limit: number = 3

  let productsLimited: Product[] = []
  function limitProducts(limit: number) {
    products.forEach((element, index) => {
      if (index - 1 < limit && element.title !== "Gift Card") {
        productsLimited.push(element)
      }
    })
  }

  limitProducts(limit)
</script>

<Container>
  <div class="section4">
    <div class="top">
      <div class="left">
        <p>SHOP PRODUCTS</p>
        <h2>Open 24/7/365.</h2>
      </div>
    </div>
    <div class="products">
      <!-- Products -->
      {#each productsLimited as product, index (index)}
        <Card {product} />
      {/each}
    </div>
    <div class="btn">
      <a href="/shop"> <button>View All Products</button></a>
    </div>
  </div>
</Container>

<style>
  .section4 {
    display: flex;
    flex-direction: column;

    gap: 3rem;
    margin: 3rem 0;
  }

  .left {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
  }

  p,
  h2 {
    color: var(--primary-color);
  }

  .left p {
    font-size: 16px;
  }

  .left h2 {
    font-size: 40px;
    font-weight: bold;
  }

  .products {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .btn{
    display: flex;
    justify-content: center;
  }

  button {
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;

    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 180ms ease-in;
  }
  button:hover {
    background-color: var(--secondary-color);
    color: white;
  }

  @media screen and (max-width: 717px) {
    .section4 {
      flex-direction: column;
    }
  }
</style>
