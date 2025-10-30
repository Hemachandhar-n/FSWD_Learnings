import React, { useEffect, useState } from 'react'

function Imagee() {
    const[Image,setImage]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/Imagee")
        .then((res)=>res.json())
        .then((data)=>setImage(data))
    },[])
  return (
    <div>
        <h1>imagelist</h1>
        {Image.map((post)=>(
            <div>
                <img src={post.image} alt={post.name} height={"500px"} width={"500px"}/>
                <h1>product name : {post.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default Imagee