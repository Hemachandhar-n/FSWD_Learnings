import React, { useEffect, useState } from 'react'

function Employee() {
    const [Emp,setEmp]=useState([])
    useEffect(()=>{
          fetch("http://localhost:5000/Employee")
          .then((res)=>res.json())
          .then((data)=>setEmp(data))
          .catch((err)=>console.log(err))
    },[])
  return (
    <div>
    <h1>Employee list</h1>
    {Emp.map((post)=>(
        <>
        <h1>Emp iD:{post.id}</h1>
        <h2>Emp Nmae:{post.name}</h2>
        <h2>Position:{post.position}</h2>
        <h4>Salary:{post.salary}</h4>
        </>
    ))}
    </div>
  )
}

export default Employee