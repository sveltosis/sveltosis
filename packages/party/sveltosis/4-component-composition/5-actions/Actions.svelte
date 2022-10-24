<script>
	let buttonText = 'Click Me';

	function onClick(node, args) {
		console.log('Mounted', node);
		return {
			update() {
				console.log('Updated', args);
			},
			destroy() {
				console.log('Destroyed', node);
			},
		};
	}
</script>

<button use:onClick={buttonText}>{buttonText}</button>
