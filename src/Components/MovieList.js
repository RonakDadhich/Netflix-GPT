import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    
// if(!movies) return ======> jab humari length zero or undefined ajata hai tab lagate hai yeh

  return (
    <div className='px-6'>
        <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies?.map((movies) => <MovieCard key={movies.id} posterPath={movies.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
