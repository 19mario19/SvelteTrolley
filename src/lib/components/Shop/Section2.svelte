<script lang="ts">
  import Container from "../utils/Container.svelte"
  import Card from "../utils/product/Card.svelte"
  import type { Product, TagsType } from "$lib/types/types"
  export let products: Product[]
  export let tags: TagsType[]

  let filteredProducts: Product[] = [...products]
  let activeTag: number | null = null
  function filterBy(tag: TagsType) {
    filteredProducts = [...products].filter((product) =>
      product.tags?.includes(tag),
    )
  }
</script>

<Container padding={0}>
  <div class="wrapper">
    <div class="side">
      <h3 class="title">Shop by Category</h3>
      <div class="tags-list">
        {#each tags as tag, index}
          <button
            class:active={index === activeTag}
            on:click={() => {
              filterBy(tag)
              activeTag = index
            }}>{tag}</button
          >
        {/each}
        <button
          class="remove"
          on:click={() => {
            filteredProducts = [...products]
            activeTag = null
          }}>Remove filters</button
        >
      </div>
    </div>
    <div class="main">
      <div class="card-list">
        {#each filteredProducts as product, index (index)}
            <Card {product} />
         
        {/each}
      </div>
    </div>
  </div>
</Container>

<style>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }

  .wrapper {
    display: flex;
    gap: 1rem;
    padding: 2rem 0;
  }

  .side {
    flex: 1;
  }
  .main {
    flex: 3;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  .tags-list {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    padding: 1rem 0;
  }

  button {
    border: 1px solid var(--primary-color);
    text-align: start;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    font-weight: bold;

    transition: all 180ms ease-in;
  }

  .active {
    background-color: var(--primary-color);
    color: white;
  }

  button:hover {
    background-color: var(--primary-color);
    color: white;
  }

  button.remove {
    background-color: white;
    color: var(--secondary-color);
  }
  button.remove:hover {
    background-color: var(--secondary-color);
    color: white;
  }

  /* Media */
   @media screen and (max-width: 717px) {
    .wrapper {
      flex-direction: column;
      gap: 2.5rem;
    }
  }
</style>
