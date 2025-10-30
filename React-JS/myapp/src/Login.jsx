// import React, { useState } from 'react'

// function Login() {
//     const [user,setUser]=useState("")
//     const [submit,setSubmit]=useState(null)
//     const handlesubmit=(event)=>{
//         event.preventDefault(); 
//         setSubmit({user})
//         setUser('')
//     }
//   return (
//     <div>Login
//         <form action="" onSubmit={handlesubmit}>
//             <input type="text" name="" id="" placeholder='enter name' value={user} onChange={(event)=>setUser(event.target.value)}/>
//             <button type='submit'>submit</button>
//         </form>
//         {submit && <>
//         <h1>submitd data</h1>
//         <p>Usernme:{submit.user}</p>
//         </>}
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'

function Login() {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [submit, setSubmit] =useState(null)
    const handlesubmit = (event) => {
        event.preventDefault();
        setSubmit({user, email, contact})
        setUser('')
        setEmail('')
        setContact('')
    }
    
  return (
    <div> 
        <h1 className='d-flex justify-content-center'>Login Form</h1>
        <form action="" onSubmit={handlesubmit}  >
           <input  type="text" name="" id="" placeholder='enter name' value={user} onChange={(event)=>setUser(event.target.value)}/>
           <br />
           <input  type="text" name="" id="" placeholder='Enter your Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
           <br />
           <input  type="text" name="" id="" placeholder='Enter your contact info' value={contact} onChange={(event)=>setContact(event.target.value)}/>
           <br />
           <button  type='submit'>submit</button>
      </form>
        {submit && <>
        <h1>submitted data</h1>
        <p>Usernme: {submit.user}</p>
        <p>Email: {submit.email}</p>
        <p>Contact: {submit.contact}</p>
        </>}

    </div>
  )
}

export default Login


