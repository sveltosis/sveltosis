import { Fragment, component$, h } from '@builder.io/qwik';
export const clickYes = function clickYes(props, state) {
	props.onYes();
};
export const clickNo = function clickNo(props, state) {
	props.onNo();
};
export const AnswerButton = component$((props) => {
	const state = {};
	return (
		<Fragment>
			<button onClick$={(event) => state.clickYes}> YES </button>
			<button onClick$={(event) => state.clickNo}> NO </button>
		</Fragment>
	);
});
export default AnswerButton;
