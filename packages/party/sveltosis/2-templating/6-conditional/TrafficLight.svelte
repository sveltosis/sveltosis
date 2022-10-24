<script lang="ts">
	const TRAFFIC_LIGHTS = ['red', 'green'];
	let lightIndex = 0;

	$: light = TRAFFIC_LIGHTS[lightIndex];

	function toggleLight() {
		lightIndex = lightIndex === 0 ? 1 : 0;
	}
</script>

<button on:click={toggleLight}>Toggle light</button>
<p>Light is: {light}</p>
<p>
	You must
	{#if light === 'red'}
		<span>STOP</span>
	{:else}
		<span>GO</span>
	{/if}
</p>
