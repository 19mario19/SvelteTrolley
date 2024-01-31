<div class="main-container">
  <div class="overlay" />
  <div class="container">
    <section class="section1">
      <h1>Here at Acme Outdoors</h1>
      <h3>every dollar counts</h3>
      <p>
        Acme Outdoors is more than just a company, we're a community of people
        who care for one another and for our city. During this time, due to
        shelter in place orders, only a select few of our staff are able to
        work. Any donations you make to Acme will help make sure our employees
        are cared for and can stay safe in these uncertain times.
      </p>
    </section>
  </div>
</div>

<style>
  .section1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10rem 0;
    gap: 1rem;
    text-align: center;

    margin: 0 auto;
    max-width: 700px;
    position: relative;
  }

 

  .main-container {
    position: relative;
    background-image: url("../../images/Donate/Section1/bg.jpg");
    background-repeat: no-repeat;
    background-position: center center; /* Center the background image */
    background-size: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      var(--primary-05-color),
      var(--primary-color)
    );
    opacity: 1;
  }

  section {
    align-self: flex-start;
    color: white;
  }

  h1 {
    font-size: 42px;
    font-weight: bold;
    text-shadow: 0.3px 0.3px var(--primary-color);
  }

  h3 {
    font-size: 30px;
    text-shadow: 0.3px 0.3px var(--primary-color);
  }

  p {
    font-size: 16px;
    line-height: 30px;
  }
  /* Media */
   @media screen and (max-width: 717px) {
    .section1 {
     padding: 2rem 0;
    }
  }
</style>
