import React from 'react'
import './Welcome.css'

function Welcome(props) {
  const style={
    color:"White",
    backgroundColor:"Black"
  }
  return (
    <div>
        <h1 style={style}>hi i am {props.name}</h1>
        <p>i am working as {props.position}</p>
        <h4 style={{color:"gray", fontFamily:"fantasy", fontSize:"larger"}}>Salary:{props.sal}</h4>
    </div>
  )
}

export default Welcome

