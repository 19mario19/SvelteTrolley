<script lang="ts">
  import type { Props } from "$lib/types/types"
  import Container from "./utils/Container.svelte"
  import cartImage from "$lib/images/cart.svg"
  import { count } from "$lib/store/count"
  import { CCartStore } from "$lib/store/showCartStore"

  export let data: Props = {
    logo: "",
    navItems: ["Home", "About", "Contact"],
  }

  let showMenu = true

  function disableMenu() {
    showMenu = true
  }
  function toggleMenue() {
    showMenu = !showMenu
  }

  const cart = new CCartStore()

  // Use a reactive statement to update countValue whenever the count store changes
  let countValue: number
  $: {
    count.subscribe((value) => {
      countValue = value
    })
  }
</script>

<Container bg="#eb5757">
  <nav>
    <div class="desktop">
      <div class="left">
        <a href="/">
          <img src={data.logo} alt="Logo" />
        </a>
      </div>
      <div class="right">
        <ul>
          {#each data.navItems as item}
            <a href={item !== "Home" ? `/${item.toLowerCase()}` : "/"}>
              <li>{item}</li>
            </a>
          {/each}
        </ul>
           <button class="cart" on:click={() => cart.switch()}
          ><img src={cartImage} alt="Cart" /><span
            ><p><strong>{countValue}</strong></p></span
          ></button
        >
      </div>
    </div>

    <!-- end desktop -->
    <div class="mobile">
      <div class="left">
        <a href="/" on:click={disableMenu}>
          <img src={data.logo} alt="Logo" />
        </a>
      </div>
      <div class="right">
        <ul class:showMenu>
          {#each data.navItems as item}
            <a
              href={item !== "Home" ? `/${item.toLowerCase()}` : "/"}
              on:click={disableMenu}
            >
              <li>{item}</li>
            </a>
          {/each}
        </ul>
        <button on:click={toggleMenue}>=</button>
        <button class="cart" on:click={() => cart.switch()}
          ><img src={cartImage} alt="Cart" /><span
            ><p><strong>{countValue}</strong></p></span
          ></button
        >
      </div>
    </div>
    <!-- end mobile -->
  </nav>
</Container>

<style>
  .desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .right {
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }

  li {
    padding: 0.3rem 0.4rem;
    border-radius: 5px;
    transition: all 180ms ease-in;
  }

  li:hover {
    background-color: var(--primary-color);
  }

  button {
    border-radius: 5px;
    background-color: var(--primary-color);
    color: white;
    padding: 0.3rem 0.85rem;
    transition: all 180ms ease-in;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    opacity: 0.9;
  }

  button > img {
    max-width: 20px;
    aspect-ratio: 1;
  }

  button.cart {
    position: relative;
  }
  button.cart p {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: white;
    color: var(--primary-color);
    font-size: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.2rem;
    border-radius: 50%;
    height: 16px;
    aspect-ratio: 1;
  }

  .showMenu {
    display: none;
  }
  .mobile {
    display: none;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .right ul {
      position: absolute;
      z-index: 100;

      inset: 100% 0 0 0;
      height: 100vh;

      flex-direction: column;
      background-color: var(--secondary-color);

      overflow: hidden;

      color: white;

      padding: 2rem;
    }

    li {
      font-size: 30px;
    }
  }
  @media screen and (min-width: 717px) {
  }
</style>
