import React from 'react'
import { useState, useEffect } from 'react';



const Apitest = () => {
    const[movie,setMovie] = useState([])

    useEffect(() => {
       fetch("https://63b41a549f50390584a6c03c.mockapi.io/Dik/names")
         .then((res) => res.json())
         .then((data) => setMovie(data));
    },[])
    
  return (
    <div>
        <h1>API TEST</h1>
        <ul>
            {movie.map((data) => (
                <li style={{listStyleType:"none",display:"grid"}}key={data.id}>
                    <img style={{height:"100px",width:"70px"}}src="https://loremflickr.com/640/480/sports"/>
                </li>
                
            ))
            }
        </ul>
    </div>
  )
}


export default Apitest