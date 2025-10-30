import React, { useState } from 'react'

function Condition1() {
    const[login,setLogin]=useState(false)
  return (
    <div>
        <h1> {login?"welcome User": "Please Login"} </h1>
        <button onClick={()=>{setLogin(!login)}} >
            {login?"logout":"login"}
        </button>
    </div>
  )
}

export default Condition1