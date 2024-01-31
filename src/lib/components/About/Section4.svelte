<script lang="ts">
  import type { CardInfo } from "$lib/types/types"
  import Container from "../utils/Container.svelte"
  export let ownersCards: CardInfo[]
</script>

<Container>
  <div class="section4">
    {#each ownersCards as owner}
      <div class="card">
        <span><img src={owner.img} alt="" /></span>
        <p>{owner.title}</p>
        <p class="description">{owner.description}</p>
      </div>
    {/each}
  </div>
</Container>

<style>
  .section4 {
    display: flex;
    margin-bottom: 3rem;
    gap: 1rem;
    justify-content: space-evenly;
  }
  .card {
    margin: 0 auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
  }

  span > img {
    max-width: 200px;
    aspect-ratio: 1;
  }
  p.description {
    line-height: 23px;
  }
  /* Media */
   @media screen and (max-width: 717px) {
    .section4 {
      flex-direction: column;
    }
  }
</style>
