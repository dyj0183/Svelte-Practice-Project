<script lang="ts">
	let { data } = $props();
	$inspect(data);
</script>

<h2>Article Page</h2>
<p>Article details: {data.articleDetails}</p>
<p>Article id: {data.articleId}</p>
