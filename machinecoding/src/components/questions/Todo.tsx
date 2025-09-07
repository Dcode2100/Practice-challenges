import React, { useState, useRef, useCallback, ChangeEvent, FormEvent } from "react"

type TodoItem = {
  id: number
  text: string
  completed: boolean
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleAddTodo = useCallback(
    (e: FormEvent | React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (!inputValue.trim()) return

      const newTodo: TodoItem = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      }

      setTodos(prev => [...prev, newTodo])
      setInputValue("")
      inputRef.current?.focus()
    },
    [inputValue]
  )

  const toggleComplete = useCallback((id: number) => {
    setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }, [])

  const handleDelete = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
          aria-label="Task input"
          autoComplete="off"
          onKeyDown={e => e.key === "Enter" && handleAddTodo(e)}
        />
        <button type="button" onClick={handleAddTodo} aria-label="Add task">
          Add
        </button>
      </div>
      {todos.length === 0 ? (
        <p aria-live="polite">No tasks yet. Add one above!</p>
      ) : (
        <ul role="list">
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                aria-label={`Mark task "${todo.text}" as ${todo.completed ? "incomplete" : "complete"}`}
              />
              <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
              <button type="button" onClick={() => handleDelete(todo.id)} aria-label={`Delete task: ${todo.text}`}>
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
      <div aria-live="polite">
        {todos.length === 0 ? "" : `${todos.filter(t => !t.completed).length} of ${todos.length} task(s) remaining`}
      </div>
    </div>
  )
}

export default Todo


