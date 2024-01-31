<script lang="ts">
  import Container from "./utils/Container.svelte"

  export let notificaiton = "Notification"
</script>

<Container bg="#222222">
  <div class="notification">
    <a href="/alert/">
      <button>Anouncement</button>
    </a>
    <a href="/alert/">
      <h3>{notificaiton}</h3>
    </a>
  </div>
</Container>

<style>
  div {
    color: white;
  }
  button {
    background-color: var(--secondary-color);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    color: white;
  }

  h3 {
    font-size: 18px;
  }

  .notification {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
  @media screen and (max-width: 717px) {
    .notification {
      flex-direction: column;
      text-align: center;
    }
  }
  @media screen and (max-width: 450px) {
    .notification h3 {
      font-size: 15px;
    }
  }
</style>
