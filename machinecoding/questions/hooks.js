// 1. useMemo

// Purpose: Caches the result of a computation so it’s only recomputed when dependencies change.
// Useful when an expensive calculation shouldn’t run every render.

import React, { useState, useMemo } from "react";

export default function PriceCalculator() {
  const [count, setCount] = useState(0);
  const [taxRate] = useState(0.18);

  // Expensive computation
  const total = useMemo(() => {
    console.log("Calculating total...");
    return count * 100 * (1 + taxRate);
  }, [count, taxRate]); // Only recomputes when count or taxRate change

  return (
    <div>
      <p>Items: {count}</p>
      <p>Total: {total}</p>
      <button onClick={() => setCount(count + 1)}>Add Item</button>
    </div>
  );
}


// 2. useCallback

// Purpose: Caches function definitions so they don’t get recreated unless dependencies change.
// Useful when passing callbacks to child components that depend on React.memo.

import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Increment</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated every render
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}

// 3. React.memo

// Purpose: Wraps a functional component to skip re-rendering if its props haven’t changed.
// Think of it like PureComponent for functions.

import React from "react";

const Greeting = React.memo(({ name }) => {
  console.log("Greeting rendered");
  return <h1>Hello, {name}!</h1>;
});

export default function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

/*

useRef – Stores a value that doesn’t change between renders.
Can point to a DOM element or just hold data.
Updating it doesn’t cause the component to re-render.

useImperativeHandle – Lets you control what gets exposed when a parent uses ref.
Good for exposing only specific functions instead of the whole element.
Works with forwardRef.

useLayoutEffect – Runs after the DOM is updated but before the browser paints.
Useful for reading layout or measuring elements.
Blocks paint until it finishes.

useTransition – Marks some state updates as low priority.
Keeps the UI responsive during heavy state changes.
Comes with isPending to show a loading state.

useDeferredValue – Delays updating a value to avoid blocking the UI.
Useful for search or filtering while typing.
Lets urgent updates happen first.

*/ 