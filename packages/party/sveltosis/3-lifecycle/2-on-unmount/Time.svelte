<script>
	import { onDestroy } from 'svelte';

	onDestroy(() => console.log('onUnmount'));
</script>
