import React from 'react'
import { useState } from 'react'

type TodoFormProps = {
   addTodo: (text: string, category: string) => void,
}


const ToDoForm: React.FC<TodoFormProps> = ({ addTodo }) => {

   const [value, setValue] = useState("")
   const [category, setCategory] = useState("")
   const [error, setError] = useState(false)

   const handleSubmit = (e: any) => {
      e.preventDefault()

      if (!value || !category) {
         setError(true)
         setTimeout(() => {
            setError(false)
         }, 2000)
      } else {
         setError(false)
         addTodo(value, category)
         setValue("")
         setCategory("")
      }
   }


   return (
      <>
         <div className='border-t-2 my-4'></div>
         <h1 className='mb-4 text-xl'>Add a new to do</h1>
         <div className='flex flex-col'>

            <form onSubmit={handleSubmit}>
               <div className='flex flex-col gap-6'>
                  <input
                     type="text"
                     placeholder='Add here your todo...'
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                     className='border rounded-sm p-1 py-2 w-full text-sm'
                  />
                  <select
                     onChange={(e) => setCategory(e.target.value)}
                     value={category}
                     className='border rounded-sm  w-full p-1 py-2 text-sm'
                  >
                     <option value="=">Category</option>
                     <option value="study">Study</option>
                     <option value="work">Work</option>
                     <option value="private">Private</option>
                  </select>

                  <button type='submit' className='flex flex-wrap rounded-md bg-blue-500 w-16 text-white justify-center p-1 shadow-sm transition-transform trasnform hover:scale-110 duration-20'>Add</button>
               </div>
            </form>
         </div>
         {
            error &&
            <p className='text-red-500 my-4'>Please fill all the fields!</p>
         }
      </>
   )
}

export default ToDoForm
