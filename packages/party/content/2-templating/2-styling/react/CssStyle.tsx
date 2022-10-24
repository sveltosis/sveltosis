import * as React from "react";

export default function CssStyle(props: any) {
  return (
    <>
      <>
        <h1 className="title">I am red</h1>
        <button style="font-size: 10rem;">I am a button</button>
      </>
      <style jsx>{`
        .title {
          color: red;
        }
      `}</style>
    </>
  );
}
