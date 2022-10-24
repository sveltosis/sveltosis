import * as React from "react";
import { useRef, useEffect } from "react";

export default function InputFocused(props: any) {
  const inputElement = useRef<any>(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return <input ref={inputElement} />;
}
