<script>
  export let bg = ""
  export let padding = 1
</script>

<div class="main" style={`background-color:${bg};`}>
  <div class="container" style={`padding: ${padding}`}>
    <slot />
  </div>
</div>
