import { createSignal } from 'solid-js';
function RawHtml(props) {
  const [html, setHtml] = createSignal('<b>bold</b>');
  return <div innerHTML={html()}></div>;
}
export default RawHtml;
