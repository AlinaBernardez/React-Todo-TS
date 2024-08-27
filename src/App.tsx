import { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId, Todo as TodoType } from "./types"


const mockTodo = [
  {
    id: '1',
    title: 'todo1',
    completed: false
  },
  {
    id: '2',
    title: 'todo2',
    completed: false
  },
  {
    id: '3',
    title: 'todo3',
    completed: false
  },
]

const App = () => {
  const  [todos, setTodos] =  useState(mockTodo)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Omit<TodoType, 'title'>): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
        todos={todos} 
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        />
    </div>
  )
}

export default App
