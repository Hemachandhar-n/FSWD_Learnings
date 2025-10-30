import React, { useEffect, useState } from 'react'

function Product1() {
    const [Product,setProduct]=useState([])
    useEffect(()=>{
       fetch("http://localhost:5000/product")
       .then((res)=>res.json())
       .then((data)=>setProduct(data))
    },[])
  return (
    <div>
        <h1>product list</h1>
        {Product.map((post)=>(
            <div>
                <img src={post.image} alt={post.name} height={"300px"} width={"300px"}/>
            <h2>Product name:{post.name}</h2>
            <p>Price:{post.price}</p>
        </div>
        ))}
    </div>
  )
}

export default Product1