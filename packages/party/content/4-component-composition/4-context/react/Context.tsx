import * as React from 'react';
import { useState, useContext } from 'react';

export default function Context(props: any) {
  const [activeTab, setActiveTab] = useState(() => 0);

  const disabled = useContext('disabled');

  return (
    <Context.Provider value={activeTab}>
      <div>
        Is disabled?
        {disabled}
      </div>
    </Context.Provider>
  );
}
