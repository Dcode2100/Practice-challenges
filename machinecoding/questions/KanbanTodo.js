import React, { useState, useCallback, useMemo } from "react";

export const TodoCard = React.memo(
  ({ TodoItem, HandleTaskUpdate, HandleDeleteTask }) => {
    const ButtonTitle = {
      todo: "Start Task",
      inProgress: "Mark Completed",
      completed: "",
    };

    return (
      <article // Use semantic HTML
        role="listitem"
        aria-labelledby={`task-name-${TodoItem.id}`}
        aria-describedby={`task-status-${TodoItem.id}`}
      >
        <h3 id={`task-name-${TodoItem.id}`}>{TodoItem.itemName}</h3>
        <p
          id={`task-status-${TodoItem.id}`}
          aria-label={`Status: ${TodoItem.status}`}
        >
          Status: {TodoItem.status}
        </p>

        {TodoItem.status !== "completed" && (
          <button
            type="button"
            onClick={() => HandleTaskUpdate({ TodoItem })}
            aria-label={`${ButtonTitle[TodoItem.status]} for ${
              TodoItem.itemName
            }`}
          >
            {ButtonTitle[TodoItem.status]}
          </button>
        )}

        <button
          type="button"
          onClick={() => HandleDeleteTask({ TodoItem })}
          aria-label={`Delete task: ${TodoItem.itemName}`}
        >
          Delete Task
        </button>
      </article>
    );
  }
);

// Add display name for debugging
TodoCard.displayName = "TodoCard";

export const Section = React.memo(
  ({ status, items, HandleTaskUpdate, HandleDeleteTask }) => {
    return (
      <section aria-labelledby={`section-${status}`}>
        <h2 id={`section-${status}`} style={{ textTransform: "capitalize" }}>
          {status} ({items.length}) {/* Show count */}
        </h2>
        <div role="list" aria-label={`Tasks in ${status} status`}>
          {items.length === 0 ? (
            <p aria-live="polite">No tasks in {status}</p>
          ) : (
            items.map((item) => (
              <TodoCard
                key={item.id}
                TodoItem={item}
                HandleTaskUpdate={HandleTaskUpdate}
                HandleDeleteTask={HandleDeleteTask}
              />
            ))
          )}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

const KanbanTodo = () => {
  // Move initial data outside to prevent recreation
  const initialTodos = useMemo(
    () => [
      { id: 1, itemName: "Task 1", status: "todo" },
      { id: 2, itemName: "Task 2", status: "completed" },
      { id: 3, itemName: "Task 3", status: "inProgress" },
    ],
    []
  );

  const [todos, setTodos] = useState(initialTodos);
  const statusOrder = useMemo(() => ["todo", "inProgress", "completed"], []);

  // Memoize status mapping
  const updateStatusMap = useMemo(
    () => ({
      todo: "inProgress",
      inProgress: "completed",
    }),
    []
  );

  // Use useCallback to prevent unnecessary re-renders
  const HandleTaskUpdate = useCallback(
    ({ TodoItem }) => {
      console.log("updating item", TodoItem);
      setTodos((prev) =>
        prev.map((item) =>
          item.id === TodoItem.id
            ? { ...item, status: updateStatusMap[item.status] }
            : item
        )
      );
    },
    [updateStatusMap]
  );

  const HandleDeleteTask = useCallback(({ TodoItem }) => {
    console.log("deleting item", TodoItem);
    setTodos((prev) => prev.filter((item) => item.id !== TodoItem.id));
  }, []);

  // Memoize filtered items to prevent recalculation
  const groupedTodos = useMemo(() => {
    return statusOrder.reduce((acc, status) => {
      acc[status] = todos.filter((item) => item.status === status);
      return acc;
    }, {});
  }, [todos, statusOrder]);

  return (
    <main>
      <header>
        <h1>Kanban Board</h1>
      </header>

      <div
        style={{ display: "flex", gap: "20px" }}
        role="region"
        aria-label="Kanban board with task columns"
      >
        {statusOrder.map((status) => (
          <Section
            key={status}
            status={status}
            items={groupedTodos[status]}
            HandleTaskUpdate={HandleTaskUpdate}
            HandleDeleteTask={HandleDeleteTask}
          />
        ))}
      </div>

      {/* Screen reader summary */}
      <div aria-live="polite" className="sr-only">
        Total tasks: {todos.length}. Todo: {groupedTodos.todo?.length || 0}, In
        Progress: {groupedTodos.inProgress?.length || 0}, Completed:{" "}
        {groupedTodos.completed?.length || 0}
      </div>
    </main>
  );
};

export default KanbanTodo;
