import React from 'react'

interface Todo {
   id: number,
   text: string,
   category: string,
   isCompleted: boolean
}

interface TodoProps {
   todo: Todo,
   deleteTodo: (id: number) => void,
   completeTodo: (id: number) => void
}


const ToDo: React.FC<TodoProps> = ({ todo, deleteTodo, completeTodo }) => {
   return (
      <>
      <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-between mb-10 border border-gray-100 rounded-md p-4 shadow-md'>
         <div className='flex items-center pb-4 md:pb-0' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <p className='text-sm'>{todo.text}</p>
         </div>
         <div className='flex justify-center items-center gap-x-5'>
            <span className='bg-orange-400 text-white text-xs text-center p-0.5 w-1/2 rounded-sm'>{todo.category}</span>
            <button className='bg-green-600 text-white p-0.5 text-xs text-center w-1/2 rounded-sm shadow-md transition-transform trasnform hover:scale-110 duration-20' onClick={() => completeTodo(todo.id)}>Done</button>
            <button className='bg-red-500 text-white p-0.5 text-xs rounded-sm w-10 shadow-md transition-transform trasnform hover:scale-110 duration-20' onClick={() => deleteTodo(todo.id)}>X</button>
         </div>
      </div>
      </>
   )
}

export default ToDo
