import React from 'react'

const SearchName = ({setSearchname}) => {
  return (
    <div>
      <input placeholder='Search a movie' onChange={(e)=>setSearchname(e.target.value)}/>
    </div>
  )
}

export default SearchName
