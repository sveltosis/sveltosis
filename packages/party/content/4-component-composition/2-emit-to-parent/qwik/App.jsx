import AnswerButton from './AnswerButton.svelte';
import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const onAnswerNo = function onAnswerNo(props, state) {
	state.canCome = false;
};
export const onAnswerYes = function onAnswerYes(props, state) {
	state.canCome = true;
};
export const App = component$((props) => {
	const state = useStore({ canCome: true });
	return (
		<Fragment>
			<p>Can I come ?</p>
			<AnswerButton onYes$={(event) => state.onAnswerYes} onNo$={(event) => state.onAnswerNo}></AnswerButton>
			<p style="font-size: 50px;">{state.canCome ? '😀' : '😥'}</p>
		</Fragment>
	);
});
export default App;
