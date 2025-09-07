import React, { useState, useMemo, useCallback } from "react"

export function PriceCalculator() {
  const [count, setCount] = useState(0)
  const [taxRate] = useState(0.18)
  const total = useMemo(() => count * 100 * (1 + taxRate), [count, taxRate])
  return (
    <div>
      <p>Items: {count}</p>
      <p>Total: {total}</p>
      <button onClick={() => setCount(count + 1)}>Add Item</button>
    </div>
  )
}

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Increment</button>
})

export function Parent() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount(c => c + 1), [])
  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  )
}

const Greeting = React.memo(({ name }: { name: string }) => {
  return <h1>Hello, {name}!</h1>
})

export default function Hooks() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  )
}


