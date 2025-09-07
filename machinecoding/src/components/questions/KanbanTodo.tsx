import React, { useState, useCallback, useMemo } from "react"

type Status = "todo" | "inProgress" | "completed"

type KanbanItem = {
  id: number
  itemName: string
  status: Status
}

type TodoCardProps = {
  TodoItem: KanbanItem
  HandleTaskUpdate: (args: { TodoItem: KanbanItem }) => void
  HandleDeleteTask: (args: { TodoItem: KanbanItem }) => void
}

export const TodoCard = React.memo(({ TodoItem, HandleTaskUpdate, HandleDeleteTask }: TodoCardProps) => {
  const ButtonTitle: Record<Exclude<Status, "completed">, string> = {
    todo: "Start Task",
    inProgress: "Mark Completed",
  }

  return (
    <article role="listitem" aria-labelledby={`task-name-${TodoItem.id}`} aria-describedby={`task-status-${TodoItem.id}`}>
      <h3 id={`task-name-${TodoItem.id}`}>{TodoItem.itemName}</h3>
      <p id={`task-status-${TodoItem.id}`} aria-label={`Status: ${TodoItem.status}`}>
        Status: {TodoItem.status}
      </p>
      {TodoItem.status !== "completed" && (
        <button type="button" onClick={() => HandleTaskUpdate({ TodoItem })} aria-label={`${ButtonTitle[TodoItem.status as Exclude<Status, "completed">]} for ${TodoItem.itemName}`}>
          {ButtonTitle[TodoItem.status as Exclude<Status, "completed">]}
        </button>
      )}
      <button type="button" onClick={() => HandleDeleteTask({ TodoItem })} aria-label={`Delete task: ${TodoItem.itemName}`}>
        Delete Task
      </button>
    </article>
  )
})

TodoCard.displayName = "TodoCard"

type SectionProps = {
  status: Status
  items: KanbanItem[]
  HandleTaskUpdate: (args: { TodoItem: KanbanItem }) => void
  HandleDeleteTask: (args: { TodoItem: KanbanItem }) => void
}

export const Section = React.memo(({ status, items, HandleTaskUpdate, HandleDeleteTask }: SectionProps) => {
  return (
    <section aria-labelledby={`section-${status}`}>
      <h2 id={`section-${status}`} style={{ textTransform: "capitalize" }}>
        {status} ({items.length})
      </h2>
      <div role="list" aria-label={`Tasks in ${status} status`}>
        {items.length === 0 ? (
          <p aria-live="polite">No tasks in {status}</p>
        ) : (
          items.map(item => (
            <TodoCard key={item.id} TodoItem={item} HandleTaskUpdate={HandleTaskUpdate} HandleDeleteTask={HandleDeleteTask} />
          ))
        )}
      </div>
    </section>
  )
})

Section.displayName = "Section"

const KanbanTodo = () => {
  const initialTodos = useMemo<KanbanItem[]>(
    () => [
      { id: 1, itemName: "Task 1", status: "todo" },
      { id: 2, itemName: "Task 2", status: "completed" },
      { id: 3, itemName: "Task 3", status: "inProgress" },
    ],
    []
  )

  const [todos, setTodos] = useState<KanbanItem[]>(initialTodos)
  const statusOrder: Status[] = useMemo(() => ["todo", "inProgress", "completed"], [])

  const updateStatusMap: Record<Exclude<Status, "completed">, Status> = useMemo(
    () => ({
      todo: "inProgress",
      inProgress: "completed",
    }),
    []
  )

  const HandleTaskUpdate = useCallback(
    ({ TodoItem }: { TodoItem: KanbanItem }) => {
      setTodos(prev => prev.map(item => (item.id === TodoItem.id ? { ...item, status: updateStatusMap[item.status as Exclude<Status, "completed">] } : item)))
    },
    [updateStatusMap]
  )

  const HandleDeleteTask = useCallback(({ TodoItem }: { TodoItem: KanbanItem }) => {
    setTodos(prev => prev.filter(item => item.id !== TodoItem.id))
  }, [])

  const groupedTodos = useMemo(() => {
    return statusOrder.reduce<Record<Status, KanbanItem[]>>((acc, status) => {
      acc[status] = todos.filter(item => item.status === status)
      return acc
    }, { todo: [], inProgress: [], completed: [] })
  }, [todos, statusOrder])

  return (
    <main>
      <header>
        <h1>Kanban Board</h1>
      </header>
      <div style={{ display: "flex", gap: "20px" }} role="region" aria-label="Kanban board with task columns">
        {statusOrder.map(status => (
          <Section key={status} status={status} items={groupedTodos[status]} HandleTaskUpdate={HandleTaskUpdate} HandleDeleteTask={HandleDeleteTask} />
        ))}
      </div>
      <div aria-live="polite" className="sr-only">
        Total tasks: {todos.length}. Todo: {groupedTodos.todo.length}, In Progress: {groupedTodos.inProgress.length}, Completed: {groupedTodos.completed.length}
      </div>
    </main>
  )
}

export default KanbanTodo


