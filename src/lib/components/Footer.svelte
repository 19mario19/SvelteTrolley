<script>
  import logo from "$lib/images/logo.svg"
  import insta from "$lib/images/social/insta.svg"
  import twitter from "$lib/images/social/twitter.svg"
  import facebook from "$lib/images/social/facebook.svg"
  import Container from "./utils/Container.svelte"
</script>

<Container bg="#222222">
  <footer>
    <div class="top">
      <div class="left">
        <img src={logo} alt="Logo" />
      </div>
      <div class="right">
        <ul>
          <li><img class="social" src={insta} alt="instagram logo" /></li>
          <li><img class="social" src={twitter} alt="twitter logo" /></li>
          <li><img class="social" src={facebook} alt="facebook logo" /></li>
        </ul>
      </div>
    </div>
    <div class="bottom">Made in SvelteKit. © 2024</div>
  </footer>
</Container>

<style>
  div {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
  }

  .top {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  li > img {
    height: 30px;
  }

  img.social {
    max-width: 60px;
    aspect-ratio: 1;
  }
</style>
