<script>
  let number = $state(0);
  let count = $derived(number * 2);
  let userName = $state("");
  // For debugging purpose
  $inspect(userName)
</script>

<h1>Here is the number {number}</h1>
<h1>Here is the count (number * 2) {count}</h1>
<button on:click={() => number++}>Click to increase the number</button>

<h1>Your User Name</h1>
<input type="text" bind:value={userName} />
<p>Displaying the user name: {userName}</p>
