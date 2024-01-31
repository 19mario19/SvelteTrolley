<script lang="ts">
  import { enhance } from "$app/forms"
  import type { Product } from "$lib/types/types"
  import Container from "$lib/components/utils/Container.svelte"
  import xLogo from "$lib/images/x.svg"
  import { CCartStore } from "$lib/store/showCartStore"

  // Cart store
  const cart = new CCartStore()
  function toggle() {
    cart.switch()
  }

  export let product: Product

  let quantity: number = 1
</script>

<Container padding={0}>
  <div class="product">
    <div class="left">
      <span><img src={product?.img} alt="" /></span>
    </div>
    <div class="right">
      <h3>{product.title}</h3>
      <div class="price">
        <p><span>$ {product.price.toFixed(2)} USD</span></p>
      </div>
      <div class="quantity"><p>Quantity</p></div>
      <form method="POST" use:enhance>
        <label for="quantity">
          <input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="0"
            bind:value={quantity}
            min="0"
            max="10"
          />
        </label>
        <button disabled={quantity <= 0} on:click={toggle} class="submit"
          >Add to Cart</button
        >
      </form>
      <div class="description">
        <p>{product.description}</p>
      </div>
      <div class="payment">
        <h4>Flexible Payment Options for Seamless Shopping</h4>
        <strong><p>PayPal: Secure and Swift Transactions</p></strong>
        <p>
          Opting for PayPal provides you with a swift and secure online payment
          experience. When you select PayPal at checkout, you will be seamlessly
          redirected to the PayPal platform to complete your purchase. PayPal is
          a trusted and widely used payment service that ensures the
          confidentiality of your financial information. With just a few clicks,
          you can finalize your order with confidence, knowing that your
          transaction is protected by PayPal's robust security measures.
        </p>
        <strong><p>Cash on Delivery: Pay at Your Doorstep</p></strong>
        <p>
          For those who prefer a more traditional approach, we also offer Cash
          on Delivery. This option allows you to pay for your order in cash when
          it is delivered to your doorstep. It provides an added layer of
          convenience, especially for those who may not be comfortable with
          online transactions or simply prefer to settle payments in person.
        </p>
      </div>
      <div class="social">
        <h4>Tweet about #AcmeOutdoors products</h4>
        <button><span><img src={xLogo} alt="X logo" /></span>Post</button>
      </div>
    </div>
  </div>
</Container>

<style>
  h3,
  p {
    color: var(--primary-color);
  }
  .product {
    display: flex;
    gap: 4rem;
    margin: 2rem 0;
  }
  img {
    width: 420px;
    height: 450px;
    object-fit: cover;
  }

  .left,
  .left img {
    border-radius: 5px;
  }

  h3 {
    font-size: 33px;
    font-weight: bold;
  }

  .price p > span {
    font-weight: bold;
  }

  input {
    max-width: 50px;
    padding: 0.5rem;
    border: 1px solid var(--primary-color);
  }

  button {
    transition: all 180ms ease-in;
  }

  input,
  button.submit {
    border-radius: 5px;
  }
  button.submit {
    padding: 0.5rem 1.5rem;
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
    font-weight: bold;
  }
  button.submit:hover {
    background-color: var(--secondary-color);
    color: white;
  }
  button.submit:disabled {
    opacity: 0.5;
    background-color: gray;
    color: black;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    line-height: 23px;
  }
  strong > p {
    font-weight: bold;
    margin: 0.5rem 0;
    font-size: large;
  }

  .payment {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .payment > h4 {
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 25px;
    font-weight: bold;
  }

  .social {
    margin: 2rem 0;
  }

  .social h4 {
    margin-bottom: 0.5rem;
  }

  .social > button {
    background-color: black;
    color: white;

    padding: 0.2rem 0.7rem;

    display: flex;
    gap: 0.2rem;
    align-items: center;
    border-radius: 15px;
  }

  .social > button:hover {
    opacity: 0.9;
  }

  .social span > img {
    height: 20px;
    width: fit-content;
  }

  /* Media */
  @media screen and (max-width: 810px) {
    .left img {
      width: 100%;
    }
    .product {
      flex-direction: column;
    }
  }
</style>
