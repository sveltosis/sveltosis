import * as React from 'react';
import { useEffect } from 'react';

export default function Time(props: any) {
  useEffect(() => {
    return () => {
      console.log('onUnmount');
    };
  }, []);

  return <></>;
}
