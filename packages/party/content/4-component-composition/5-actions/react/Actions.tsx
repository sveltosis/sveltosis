import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

export default function Actions(props: any) {
  const button0 = useRef(null);
  const [buttonText, setButtonText] = useState(() => 'Click Me');

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

  const [actionHandler0, setActionHandler0] = useState(() => null);

  useEffect(() => {
    if (button0.current) {
      setActionHandler0(onClick(button0.current, buttonText));
    }
  }, []);

  useEffect(() => {
    if (!button0.current && actionHandler0) {
      actionHandler0?.destroy();
      setActionHandler0(null);
    } else if (button0.current && !actionHandler0) {
      if (button0.current) {
        setActionHandler0(onClick(button0.current, buttonText));
      }
    }
  }, [button0.current]);
  useEffect(() => {
    actionHandler0?.update(buttonText);
  }, [buttonText]);

  return <button ref={button0}>{buttonText}</button>;
}
