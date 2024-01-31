<script lang="ts">
  import Container from "../utils/Container.svelte"
  import type { CardInfo } from "$lib/types/types"

  export let cardInfo: CardInfo[]
</script>

<Container>
  <div class="section2">
    <div class="top">
      <div class="left">
        <p>WAYS TO SUPPORT</p>
        <h2>Support Acme Outdoors.</h2>
      </div>
      <div class="right">
        <p>
          COVID-19 has forced us to close our retail space, but we need support
          from patrons like yourself now more than ever. Below, we’ve listed the
          best ways to help us through this season.
        </p>
      </div>
    </div>
    <div class="bottom">
      <!-- Cards -->
      {#each cardInfo as card, index (index)}
        <div class="card">
          <div class="card-container">
            <p>0{index + 1}</p>
            <h3>{card.title}</h3>
            <span><img src={card.img} alt="svg" /></span>
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
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
  }

  .bottom {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .bottom > * {
    flex: 1;
  }

  .card {
    display: flex;
    flex-direction: column;

    gap: 1rem;


    margin: 0 auto;
  }

  .card-container {
    background-color: var(--primary-color);

    min-height: 250px;
    min-height: 300px;
    /* aspect-ratio: 1; */

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    position: relative;
    overflow: hidden;
  }

  h3 {
    flex-wrap: wrap;
    max-width: 200px;
  }

  span > img {
    position: absolute;
    right: -30px;
    bottom: -55px;
  }
  .card:first-child span > img {
    right: -80px;
    bottom: -80px;
  }
  .card:nth-child(3) span > img {
    right: -55px;
    bottom: -110px;
  }

  .card-container p {
    position: absolute;
    top: 40px;
    left: 30px;
  }

  .card-container > * {
    color: white;
    font-weight: bold;
    font-size: 40px;
  }

  div > * {
    color: var(--primary-color);
  }

  .top {
    display: flex;
    align-items: flex-end;
  }
  .top > * {
    flex: 1;
  }
  p {
    line-height: 21px;
  }
  .left p {
    font-size: 16px;
  }

  .left h2 {
    font-size: 40px;
    font-weight: bold;
  }

  @media screen and (max-width: 922px) {
    .bottom h3 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 717px) {
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
