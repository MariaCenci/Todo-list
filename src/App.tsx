import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'
import Filter from './components/Filter'
import Search from './components/Search'



const App: React.FC = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Clean house",
      category: "private",
      isCompleted: false
    }
  ])

  // CRUD - ADD
  const addToDo = (text: string, category: string) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
      }
    ]
    setTodos(newTodos)
  }


  //CRUD - DELETE
  const deleteTodo = (id: number) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
    console.log("chamou")
  }


  const completeTodo = (id: number) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id == id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)

  }


  const [filter, setFilter] = useState("")

  const [sort, setSort] = useState("asc")

  const [filterCategory, setFilterCategory] = useState("All categories")

  const [search, setSearch] = useState("")


  return (
    <>
      <div className='flex justify-center mt-8 flex-col px-12 lg:mx-40 xl:mx-80 mb-10'>
        <h1 className='text-3xl'>To do list</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} filterCategory={filterCategory} setFilterCategory={setFilterCategory} setSort={setSort} />
        <div className='border-t-2 my-4'></div>
        <div className='flex justify-center flex-col'>
          <div className='w-full'>
            {todos
              .filter((todo) =>
                filter == 'all'
                  ? true
                  : filter == 'completed'
                    ? todo.isCompleted
                    : !todo.isCompleted
              )
              .filter((todo) =>
                todo.text.toLocaleLowerCase().includes(search)
              )
              .sort((a, b) =>
                sort == 'asc'
                  ? a.text.localeCompare(b.text)
                  : b.text.localeCompare(a.text)
              )
              .filter((todo) =>
                filterCategory === 'All categories'
                  ? true
                  : todo.category.toLocaleLowerCase() === filterCategory.toLocaleLowerCase()
              )
              .map((todo) =>
                <ToDo todo={todo} key={todo.id} completeTodo={completeTodo} deleteTodo={deleteTodo} />
              )
            }

            <ToDoForm addTodo={addToDo} />
          </div>

        </div>
      </div>

    </>
  )
}

export default App



/*

  {
              todos
                .filter((todo) => 
               filter === "all" 
                ? true
                : filter === "completed"
                ? todo.isCompleted
                :!todo.isCompleted 
                )
                .filter((todo) =>
                  todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                )
                .filter((todo) => 
                filterCategory === "all categories"
                ? true
                : todo.category === filterCategory
                )
                .sort((a, b) =>
                  sort == "asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
                
                )
                .map((todo) =>
                  <ToDo todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo} />
                )
            }
*/