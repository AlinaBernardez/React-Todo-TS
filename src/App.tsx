import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, type TodoId, Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"



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
  const [todos, setTodos] =  useState(mockTodo)
  const[filterSelected, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue) : void => {
    setFilter(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Todos 
        todos={filteredTodos} 
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        />
      <Footer 
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
