import * as React from 'react';
import { useEffect } from 'react';

export default function AfterUpdate(props: any) {
  useEffect(() => {
    console.log('updated');
  });

  return <></>;
}
