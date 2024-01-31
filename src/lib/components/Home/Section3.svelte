<div class="main-container">
  <div class="overlay" />
  <div class="container">
    <section class="section3">
      <h2>How we're keeping you safe during COVID-19</h2>
      <p>
        As an outdoor shop, we’ve taken precautionary measures to ensure the
        safety of all our customers and team members.
      </p>

      <button>Read Our Statement</button>
    </section>
  </div>
</div>

<style>
  .section3 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 6rem 0;
    gap: 1rem;
    text-align: start;

    max-width: 45%;
    position: relative;

}

.main-container {
    position: relative;
    background-image: url("../../images/Home/Section3/bg.jpg");
    background-repeat: no-repeat;
    background-position: center center; /* Center the background image */
    background-size: cover;
}

.container {
    display: flex;
    justify-content: flex-end;
}

.container > * {
    text-align: end;

}


.overlay {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent, var(--primary-color));
    opacity: 0.85;
}

section,
button {
    align-self: flex-end;
    color: white;
    margin: 0 .2rem;
}

button {
    background-color: white;
    color: var(--primary-color);
    font-weight: bold;

    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 180ms ease-in;
}
button:hover {
    background-color: var(--secondary-color);
    color: white;
}

h2 {
    font-size: 45px;
    font-weight: bold;
    text-shadow: 0.3px 0.3px var(--primary-color);
}

p {
    font-size: 18px;
    line-height: 30px;
}
/* Media */
   @media screen and (max-width: 717px) {
    .section3 {
      max-width: 100%;
    }
  }
</style>
