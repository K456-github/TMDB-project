import React, { useEffect, useState } from 'react'
import Filtermovie from './components/Filtermovie'
import Movie from './components/Movie'

const App = () => {
  const [popular,setpopular] = useState([])
  const [filtered,setfiltered] = useState([])

useEffect(()=> {
  fetchpopular()
},[])

  const fetchpopular = async () => {
    const api = await fetch (`
    https://api.themoviedb.org/3/movie/popular?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US&page=1`)
    const {results} = await api.json()
    setpopular(results)
    setfiltered(results)
  }
  return (
    <div className="">
      <Filtermovie filtered={filtered} setfiltered={setfiltered}/>
      <div className='flex flex-wrap justify-center gap-10 mt-20 '>
      
      {popular.map(movie => {
        return(
          <Movie key={movie.id} {...movie}/>
        )
      })}
    </div>
    </div>
  )
}

export default App