import React from 'react'

const Movie = ({title,backdrop_path}) => {
  return (
    <div>
        <div className="">
       <img src={"https://image.tmdb.org/t/p/w400" +backdrop_path} className='rounded-lg shadow-lg' alt="" />
        <p className='font-semibold p-2'>{title}</p>
        </div>
    </div>
  )
}

export default Movie