<script lang="ts">
  import Container from "../utils/Container.svelte"

  const donateList: number[] = [100, 50, 25, 15, 5]
</script>

<Container padding={0}>
  <div class="section2">
    <!-- Buttons -->
    {#each donateList as item, index (index)}
      <button>Donate ${item}</button>
    {/each}
  </div>
</Container>

<style>
  .section2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid var(--primary-color);

    padding: 2rem;

    max-width: 600px;

    gap: 1rem;
    margin: 2rem auto;
  }
  .section2,
  button {
    border-radius: 5px;
  }
  button {
    background-color: var(--secondary-color);
    color: white;
  }
  button:hover {
    background-color: var(--primary-color);
  }

  button {
    max-width: 550px;
    width: 90%;
    padding: 1rem;
    transition: all 180ms ease-in;

    font-size: 23px;
    font-weight: 800;
  }

  /* Media */
   @media screen and (max-width: 717px) {
    .section2 {
      padding: 1rem .5rem;
      margin: 2rem 1rem;
    }
  }
</style>
