<script>
  import Container from "../utils/Container.svelte"
</script>

<Container>
  <div class="section2">
    <div class="left">
      <h3>Contact Us</h3>
      <div class="address">
        <p>Acme Outdoors</p>
        <p>123 Rainy Street</p>
        <p>Oklahoma City, OK 73129</p>
      </div>
      <div class="phone">
        <p><span>General Inquires:</span> 555-5555</p>
        <p><span>Customer Support:</span> 555-5556</p>
      </div>
    </div>
    <div class="right">
      <h2>Contact Form</h2>
      <p>Send us a message and we'll get back to you as soon as we can!</p>
      <form method="POST">
        <div class="form-input">
          <label for="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div class="form-input">
          <label for="email">Email Address:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div class="form-input">
          <label for="message">Your Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</Container>

<style>
  .section2 {
    display: flex;
    padding: 2rem 0;
  }

  .section2 > * {
    color: var(--primary-color);
  }
  .left,
  .right {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2,
  h3 {
    font-weight: bold;
  }

  h2 {
    font-size: 35px;
  }

  h3 {
    font-size: 30px;
  }

  p {
    line-height: 23px;
  }

  p > span {
    font-weight: bold;
  }

  .left .address {
    margin-bottom: 1rem;
  }

  /* Form */
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input,
  textarea {
    padding: 0.5rem 0.7rem;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
  }

  textarea {
    min-height: 50px;
  }

  /* Button */
  button {
    border-radius: 5px;
    background-color: var(--secondary-color);
    color: white;

    max-width: 150px;
    width: fit-content;
    padding: 0.4rem 1.2rem;
    transition: all 180ms ease-in;

    font-weight: 600;

    transition: all 180ms ease-in;
  }
  button:hover {
    background-color: var(--primary-color);
  }

  /* Media */
   @media screen and (max-width: 717px) {
    .section2 {
      flex-direction: column;
      gap: 2.5rem;
    }
  }
</style>
