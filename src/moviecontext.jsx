import React,{useState, createContext} from 'react'
 

export const Moviecontext= createContext();

export const Movieprovider = (props)  => {
    const [movies, setmovies] = useState([
            {name:'Rockstar',price:"100"},
            {name:'Dangal', price:"200"},
            {name:'Sky is Pink', price:"50"}
          ])
        
        return(
            <Moviecontext.Provider value={[movies,setmovies]}>
            {props.children}
            </Moviecontext.Provider>
        ) 
        }