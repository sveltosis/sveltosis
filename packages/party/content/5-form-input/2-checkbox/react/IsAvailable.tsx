import * as React from "react";
import { useState } from "react";

export default function IsAvailable(props: any) {
  const [isAvailable, setIsAvailable] = useState(() => false);

  return (
    <>
      <input
        id="is-available"
        type="checkbox"
        onChange={(event) => setIsAvailable(event.target.checked)}
        checked={isAvailable}
      />
      <label for="is-available">Is available</label>
    </>
  );
}
