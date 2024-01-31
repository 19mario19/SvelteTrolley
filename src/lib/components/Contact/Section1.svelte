<script lang="ts">
  import type { CardInfo } from "$lib/types/types"
  import Container from "../utils/Container.svelte"

  export let contactCards: CardInfo[]
</script>

<div class="main-container">
  <div class="overlay" />
  <div class="overlay-right" />
  <Container>
    <main>
      <div class="left">
        <h1>Contact Acme Outdoors</h1>
        <div class="card-list">
          {#each contactCards as card}
            <div class="card">
              <span><img src={card.img} alt={card.title} /></span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button>{card.buttonName}</button>
            </div>
          {/each}
        </div>
      </div>
      <div class="right"></div>
    </main>
  </Container>
</div>

<style>
  .main-container {
    position: relative;
    background-color: var(--primary-color);
    padding: 2rem 0;
  }

  .overlay {
    /* takes 50% of the div */
    position: absolute;
    inset: 0 0 0 50%;

    z-index: 0;

    background-image: url("../../images/Contact/Section1/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .left,
  .right {
    flex: 1;
    z-index: 1;
  }

  .left {
    flex: 2;
  }

  .overlay {
    background-color: var(--primary-color);
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  main {
    background-color: var(--primary-color);
    display: flex;
  }

  h1,
  button {
    color: white;
    font-weight: bold;
  }
  h1 {
    font-size: 42px;
  }

  .overlay-right {
    position: absolute;
    inset: 0 0 0 50%;
    background-image: linear-gradient(
      to left,
      transparent,
      var(--primary-color)
    );
    opacity: 1;
  }

  .card-list {
    display: flex;
    gap: 2rem;
  }
  .card {
    background-color: white;
    text-align: center;

    border-radius: 5px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card img {
    margin-bottom: 1rem;
  }

  .card h3 {
    font-size: 32px;
    font-weight: bold;
  }

  .card button {
    background-color: var(--secondary-color);
    padding: 0.5rem 1.5rem;
    width: fit-content;
    align-self: center;

    border-radius: 5px;

    transition: all 180ms ease-in;
  }

  .card button:hover {
    background-color: var(--primary-color);
  }

  @media screen and (max-width: 813px) {
    main {
      flex-direction: column-reverse;
    }

    .right {
      min-height: 280px;
    }

    .overlay {
      inset: 0 0 50% 0;
    }

    .overlay-right {
      inset: 0 0 50% 0;
      opacity: 1;
    }

    .overlay-right {
      background-image: linear-gradient(
        to bottom,
        transparent,
        var(--primary-05-color),
        var(--primary-05-color),
        var(--primary-color)
      );
    }
  }

  @media screen and (max-width: 550px) {
    .card-list {
      flex-direction: column;
    }
  }
</style>
