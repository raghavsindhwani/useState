import React,{useState,useContext} from 'react'
import {Moviecontext} from './moviecontext'

const Addmovie = () =>{

    const [name,setname]=useState('')
    const [price,setprice]=useState('')
    const [movies,setmovies]=useContext(Moviecontext)

    const Updatename = e =>{
        setname(e.target.value)
    }

    const Updateprice = e =>{
        setprice(e.target.value)
    }

    const Addmovie = e =>{
        e.preventDefault()
        setmovies(prevstate => [...prevstate,{name:name,price:price}])
    }
    return(
        <div className="form">
        <form onSubmit={Addmovie}>
            <input type="text" name="name" value={name} onChange={Updatename} />
            <input type="text" name="price" value={price} onChange={Updateprice}/>
            <button>submit</button>

        </form>
        </div>
    )
}
export default Addmovie