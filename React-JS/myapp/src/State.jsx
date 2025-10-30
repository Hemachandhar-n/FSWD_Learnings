import React, { useState } from 'react'

function State() {
    const [count,SetVaule]=useState(0)
    const increse=()=>{
        SetVaule(count+1)
    }
    const decrease=()=>{
        if(count>1){
            SetVaule(count-1)
        }
    }
    const reset=()=>{
        SetVaule(0)
    }
  return (
    <div>
        <h1>Counter app using react  usinng usestate</h1>
        <h1> {count} </h1>
        <button onClick={increse}>increase</button>
        <br />
        <button onClick={decrease}>decrease</button>
        <br />
        <button onClick={reset}>reset</button>
        <br />
    </div>
  )
}

export default State