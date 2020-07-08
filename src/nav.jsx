import React, {useContext} from 'react'
import {Moviecontext} from './moviecontext'

const Nav = () => {
    const [movies,setmovies]=useContext(Moviecontext)
        return (
            <div className="header">
               <h2>Movie box</h2> 
        <h2>Number of movies:{movies.length}</h2>
            </div>
        )
    }

export default Nav
