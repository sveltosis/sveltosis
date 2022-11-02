import * as React from 'react';
import { useState, useEffect } from 'react';

export default function PageTitle(props: any) {
  const [pageTitle, setPageTitle] = useState(() => '');

  useEffect(() => {
    setPageTitle(document.title);
  }, []);

  return (
    <p>
      Page title is:
      {pageTitle}
    </p>
  );
}
