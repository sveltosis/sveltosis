<script>
	export let disabled = false;
	export let type = 'button';
</script>

<button {disabled} {type}>
	<slot />
</button>
