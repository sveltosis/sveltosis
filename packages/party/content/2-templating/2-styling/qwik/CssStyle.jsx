import { Fragment, component$, h, useStylesScoped$ } from '@builder.io/qwik';
export const CssStyle = component$((props) => {
  useStylesScoped$(STYLES);
  return (
    <Fragment>
      <h1 class="title">I am red</h1>
      <button style="font-size: 10rem;">I am a button</button>
    </Fragment>
  );
});
export default CssStyle;
export const STYLES = `


	.title {
		color: red;
	}
`;
