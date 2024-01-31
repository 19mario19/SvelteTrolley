<script lang="ts">
  import Container from "../utils/Container.svelte"
  import type { CardInfo } from "$lib/types/types"

  export let cardInfo: CardInfo[]
</script>

<Container>
  <div class="section2">
    <div class="top">
      <div class="left">
        <p>WHY ACME OUTDOORS?</p>
        <h2>We’re the best in the business.</h2>
      </div>
      <div class="right">
        <p>
          From more than 30 years, we’ve been leading the way across Oklahoma —
          creating the best possible customer experience since 1989.
        </p>
      </div>
    </div>
    <div class="bottom">
      <!-- Cards -->
      {#each cardInfo as card, index (index)}
        <div class="card">
          <div class="card-container">
            <span><img src={card.img} alt="svg" /></span>
            <h3>{card.title}</h3>
          </div>
          <div class="description">
            <p>{card.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Container>

<style>
  .section2 {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h2 {
    font-size: 35px;
    font-weight: bold;
  }

  .top, .top .left {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  .top {
    max-width: 500px;
    margin: 0 auto;
  }
  .bottom {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .bottom h3 {
    font-weight: 600;
    font-size: 25px;
  }
  .card {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    max-width: 280px;

    margin: 0 auto;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    line-height: 24px;
  }

  @media screen and (max-width: 717px) {
    .card {
      max-width: 380px;
    }

    .card-container {
      text-align: center;
    }
    .top,
    .bottom {
      flex-direction: column;
    }
    .top {
      align-items: flex-start;
      gap: 1rem;
    }
  }
</style>
