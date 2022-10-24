import {
  Fragment,
  component$,
  h,
  useClientEffect$,
  useRef,
} from "@builder.io/qwik";
export const InputFocused = component$((props) => {
  const inputElement = useRef();
  useClientEffect$(() => {
    inputElement.focus();
  });
  return <input ref={inputElement}></input>;
});
export default InputFocused;
