<script lang="ts">
	export let disabled: boolean = false;
	export let type: string = 'button';
</script>

<button {disabled} {type}>
	<slot />
</button>
