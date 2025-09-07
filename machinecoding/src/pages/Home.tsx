// import Form from '@/components/questions/Form'
// import Hooks from '@/components/questions/hooks'
// import KanbanTodo from '@/components/questions/KanbanTodo'
// import Pokemon from '@/components/questions/Pokemon'
import Todo from "../components/questions/Todo"

function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="text-sm text-gray-600">Questions playground</p>
      {/* <Form /> */}
      {/* <Hooks /> */}
      {/* <KanbanTodo /> */}
      {/* <Pokemon /> */}
      <Todo/>
    </div>
  )
}

export default Home


