import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const AddMovie = ({handleAddmovie}) => {
    const[title, setTitle]=useState('')
    const[rate, setRate]=useState('')
    const[image, setImage]=useState('')

    const handleAdd=()=>{
        handleAddmovie({
            id:uuidv4(),
            title:title,
            rate:rate,
            imga:image,
        })
    }
  return (
    <div>
      <input placeholder='Title du film' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input placeholder='Rate du film' value={rate} onChange={(e)=>setRate(e.target.value)}/>
      <input placeholder='Image du film' value={image} onChange={(e)=>setImage(e.target.value)}/>
      <button onClick={()=>handleAdd()}>add movie</button>
    </div>
  )
}

export default AddMovie
