import React from 'react'
import { useState, useEffect } from 'react';



const Apitest = () => {
    const[movie,setMovie] = useState([])
  
    useEffect(() => {
       fetch(" https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => setMovie(data));
    },[])
    
  return (
    <div>
        <h1>API TEST</h1>
        <ul>
            {movie.map((data) => (
                <li style={{listStyleType:"none",display:"grid"}}key={data.id}>
                    <h3>{data.name}</h3>
                </li>
                
            ))
            }
        </ul>
    </div>
  )
}


export default Apitest