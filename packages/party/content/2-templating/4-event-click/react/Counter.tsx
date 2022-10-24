import * as React from 'react';
import { useState } from 'react';

export default function Counter(props: any) {
	const [count, setCount] = useState(() => 0);

	function incrementCount() {
		setCount(count + 1);
	}

	return (
		<>
			<p>
				Counter:
				{count}
			</p>
			<button onClick={(event) => incrementCount}>+1</button>
		</>
	);
}
