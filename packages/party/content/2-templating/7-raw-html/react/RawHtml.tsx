import * as React from "react";
import { useState } from "react";

export default function RawHtml(props: any) {
  const [html, setHtml] = useState(() => "<b>bold</b>");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
