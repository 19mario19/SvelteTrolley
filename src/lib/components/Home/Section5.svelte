<script lang="ts">
  import ImageOverlayText from "../utils/shared/ImageOverlayText.svelte"
  import type { CardInfoDetailed } from "$lib/types/types"
  import bgImage from "$lib/images/Home/Section5/bg.jpg"
  import Container from "../utils/Container.svelte"
  const props: CardInfoDetailed = {
    img: bgImage,
    title: "Shop Local.",
    description: {
      content: [
        "We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.",
        "That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.",
        "But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.",
      ],
      line: "-------",
      author: "Jane & John Doe",
      companyName: "Acme Outdoors",
    },
  }

</script>

<Container>
  <div class="section5">
    <ImageOverlayText {props} />
  </div>
</Container>

<style>
  .section5 {
    display: flex;
    margin-bottom: 3rem;
  }
</style>
