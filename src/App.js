import { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
import SearchName from './SearchName';

function App() {
  const[moviedonne, setMoviedonne]=useState([
    {
        id:1,
        title:'GOT',
        imga:'https://fr.web.img3.acsta.net/pictures/15/08/10/12/51/027338.jpg',
        rate:'Super serie'
    },
    {
        id:2,
        title:'Crime',
        imga:'https://fr.web.img3.acsta.net/pictures/14/02/12/13/39/197073.jpg',
        rate:'Super serie'
    },
    {
        id:3,
        title:'Action',
        imga:'https://media-animation.be/IMG/jpg/image.jpg',
        rate:'Awesone'
    },
    {
        id:4,
        title:'GOT',
        imga:'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/85/33/65/19783637.jpg',
        rate:'Terific'
    },
])
const handleAddmovie=(newMovie)=>{
  setMoviedonne([...moviedonne,newMovie])
}
const handleSearch=()=>{
  
}
const[searchname, setSearchname]=useState('')
  return (
    <div className="App">
    <SearchName setSearchname={setSearchname}/>
    <MovieList moviedonne= {moviedonne} searchname={searchname}/>
    <AddMovie handleAddmovie={handleAddmovie}/>
    </div>
  );
}

export default App;
