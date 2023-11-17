import React, { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({moviedonne, searchname}) => {
  return (
    <div>
      {moviedonne.filter((el)=>el.title.toLowerCase().includes(searchname.toLowerCase().trim()))
      .map((el)=> <MovieCard movie={el}/>)}
    </div>
  )
}

export default MovieList
