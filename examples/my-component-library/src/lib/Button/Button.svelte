<script lang="ts">
	export let disabled: boolean = false;
	export let type = 'button';
</script>

<button {disabled} {type}>
	<slot />
</button>
