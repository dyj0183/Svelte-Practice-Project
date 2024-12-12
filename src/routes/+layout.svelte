<script lang="ts">
	let data = $props();
	$inspect(data);
</script>

<header>HERE IS THE HEADER</header>
{@render data.children()}
