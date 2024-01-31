<div class="main-container">
  <div class="overlay" />
  <div class="container">
    <section class="section1">
      <h1>Need Help?</h1>
      <p>
        Need help or assistance? Our team is standing by to make sure you get
        the help you need. Whether you need to adjust an order or delivery
        details, we're ready to help!
      </p>

      <button>Contact Support</button>
    </section>
  </div>
</div>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 11rem 0;
    gap: 1rem;
    text-align: start;

    max-width: 35%;
    position: relative;
  }

  .main-container {
    position: relative;
    background-image: url("../../images/About/Section5/bg.jpg");
    background-repeat: no-repeat;
    background-position: center center; /* Center the background image */
    background-size: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent, var(--primary-color));
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
