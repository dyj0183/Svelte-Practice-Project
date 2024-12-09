<script>
  let number = $state(0);
  let count = $derived(number * 2);
</script>

<h1>Here is the number {number}</h1>
<h2>Here is the count {count}</h2>
<button on:click={() => number++}>Increment</button>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
