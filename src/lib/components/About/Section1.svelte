<div class="main-container">
  <div class="overlay" />
  <div class="container">
    <section class="section1">
      <h1>Your Adventure Awaits</h1>
      <p>
        Acme Outdoors has everything you need to help you get started today.
        Check out our wonderful collection of gear that will make your next
        adventure complete.
      </p>

      <a href="/shop"> </a>
      <button>Shop Merch</button>
    </section>
  </div>
</div>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 6rem 0;
    gap: 1rem;
    text-align: start;

    max-width: 35%;
    position: relative;
  }

  .main-container {
    position: relative;
    background-image: url("../../images/About/Section1/bg.jpg");
    background-repeat: no-repeat;
    background-position: center center; /* Center the background image */
    background-size: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent, var(--primary-color));
    opacity: 0.85;
  }

  section,
  button {
    align-self: flex-start;
    color: white;
  }

  button {
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 180ms ease-in;
  }
  button:hover {
    background-color: white;
    color: var(--primary-color);
  }

  h1 {
    font-size: 62px;
    font-weight: bold;
    text-shadow: 0.3px 0.3px var(--primary-color);
  }

  p {
    font-size: 18px;
    line-height: 30px;
  }

  /* Media */
  @media screen and (max-width: 717px) {
    .section1 {
      max-width: 100%;
    }
  }
</style>
