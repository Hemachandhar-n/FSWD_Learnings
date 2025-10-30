import React, { useState } from 'react'

function Contion() {
    const [login,setLogin]=useState(false)
  return (
    <div>
      <h1>{login?"welcome user":"plse login "}</h1>
      <button onClick={()=>{setLogin(!login)}}>{login?"logout":"login"}</button>
    </div>
  )
}

export default Contion