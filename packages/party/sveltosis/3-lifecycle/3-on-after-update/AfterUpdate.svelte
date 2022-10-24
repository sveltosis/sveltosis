<script>
	import { onAfterUpdate } from 'svelte';

	onAfterUpdate(() => {
		console.log('updated');
	});
</script>
