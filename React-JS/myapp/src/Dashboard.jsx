import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
function Dashboard() {
    const navigate=useNavigate()
    const location=useLocation()
  return (
    <div>
        <h1>Welcome to The DASHBOARD PAGE</h1>
        <h1>Welcome {location.state?.name} </h1>
       <button onClick={()=>{navigate("/")}}>logout</button>
    </div>
  )
}

export default Dashboard