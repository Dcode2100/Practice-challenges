import React, { useState, useRef, useCallback } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // Add a new todo
  const handleAddTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputValue.trim()) return;

      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };

      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
      inputRef.current?.focus();
    },
    [inputValue]
  );

  // Toggle completed status
  const toggleComplete = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Delete a todo
  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input to add new todo */}
      <div>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
          aria-label="Task input"
          autoComplete="off"
          onKeyPress={(e) => e.key === "Enter" && handleAddTodo(e)}
        />
        <button type="button" onClick={handleAddTodo} aria-label="Add task">
          Add
        </button>
      </div>

      {/* List of todos */}
      {todos.length === 0 ? (
        <p aria-live="polite">No tasks yet. Add one above!</p>
      ) : (
        <ul role="list">
          {todos.map((todo) => (
            <li key={todo.id}>
              {/* Checkbox */}
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                aria-label={`Mark task "${todo.text}" as ${
                  todo.completed ? "incomplete" : "complete"
                }`}
              />

              {/* Todo text */}
              <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>

              {/* Delete button */}
              <button
                type="button"
                onClick={() => handleDelete(todo.id)}
                aria-label={`Delete task: ${todo.text}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Footer with count */}
      <div aria-live="polite">
        {todos.length === 0
          ? ""
          : `${todos.filter((t) => !t.completed).length} of ${
              todos.length
            } task(s) remaining`}
      </div>
    </div>
  );
};

export default Todo;
