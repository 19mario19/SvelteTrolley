<script lang="ts">
  import type { CardInfoDetailed } from "$lib/types/types"
  export let props: CardInfoDetailed
</script>

<div class="image-overlay-text">
  <div class="left">
    <img src={props.img} alt={props.title} />
  </div>
  <div class="right">
    <h3 class="title">{props.title}</h3>
    <div class="description">
      {#each props.description.content as paragraph (paragraph)}
        <p>{paragraph}</p>
      {/each}
      {#if props.description.line}
        <p>{props.description.line}</p>
      {/if}
      {#if props.description.author}
        <div>{props.description.author}</div>
      {/if}
      {#if props.description.companyName}
        <strong>{props.description.companyName}</strong>
      {/if}
      <div></div>
    </div>
  </div>
</div>

<style>
  .image-overlay-text {
    display: grid;
    grid-template-columns: 1fr 3fr;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .left {
    position: relative;
  }

  .left > img {
    position: absolute;
    width: 375px;
    bottom: 30px;
    height: 85%;
  }

  .right {
    background-color: var(--primary-color);
    color: white;
    padding: 5rem 4rem 5rem 9rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h3 {
    font-size: 45px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (max-width: 1015px) {
    .image-overlay-text {
      display: flex;
      flex-direction: column;
    }


    .left > img {
      position: static;
      width: 100%;
      bottom: 100px;
      height: 100%;
    }

    .right {
      flex: 1;
      padding: 2rem 5rem;
      display: flex;
      justify-content: center;
    }

    .left,
    .left > img {
      border-radius: 5px 5px 0 0;
      max-height: 400px;
      
    }
    .right {
      border-radius: 0 0 5px 5px;
    }
  }
    @media screen and (max-width: 710px) {
      .right {
        padding: 1rem 2rem;
      }
    }
</style>
