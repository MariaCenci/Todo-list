import React from 'react'

type FilterProps = {
   filter: string,
   filterCategory: string,
   setFilter: (value: string) => void,
   setFilterCategory: (value: string) => void,
   setSort: (value: string) => void
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter, filterCategory, setFilterCategory, setSort}) => {
   return (
   <div>
      <h1 className='text-xl mb-4'>Filter</h1>
      <div className='flex flex-wrap mb-6 gap-6  md:justify-normal'>
            <div className='w-full'>
               <select className='text-sm border rounded-sm p-1 shadow-sm w-full' value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option value="=">Status</option>
                  <option value="completed">Completed</option>
                  <option value="incomplete">Incomplete</option>
               </select>
            </div>
            <div className='w-full'>
               <select className='text-sm border rounded-sm p-1 w-full' value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                  <option value="All categories" >All categories</option>
                  <option value="Study">Study</option>
                  <option value="Work">Work</option>
                  <option value="Private">Private</option>
               </select>
            </div>
         </div>
         <div className='flex gap-4 mb-4'>
            <button onClick={() => setSort("asc")} className=' rounded-sm p-0.5 w-12 text-sm text-white text-center bg-pink-500 transition-transform trasnform hover:scale-110 duration-20'>Asc</button>
            <button onClick={() => setSort("desc")} className=' rounded-sm p-0.5 w-12 text-sm text-white text-center bg-purple-500 transition-transform trasnform hover:scale-110 duration-20'>Desc</button>
         </div>
      </div>
   )
}

export default Filter
