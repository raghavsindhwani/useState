import React,{useState,useContext} from 'react'
import Movie from './movie'
import {Moviecontext} from './moviecontext'

const Movieslist = () => {
    const [movies,setmovies]= useContext(Moviecontext)
    return (
        <div>
            {/* <h1>{value}</h1> */}
            {movies.map(movie => (
                    <Movie name={movie.name} price={movie.price} key={movie.name}/> 
            ))}
        </div>
    )
}

export default Movieslist
