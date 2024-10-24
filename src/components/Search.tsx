import React from 'react'

type searchProps = {
   search: string,
   setSearch: (text: string) => void
}

const Search: React.FC<searchProps>= ({search, setSearch}) => {
  return (
    <div className='mb-6 mt-2'>
      <input 
      type="text" 
      placeholder='Search todo...'
      className='my-2 w-full p-1 text-sm border rounded-sm shadow-sm'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
