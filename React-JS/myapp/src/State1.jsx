// import React, { useState } from 'react'

// function State1() {
//     const [message,setMessage]=useState(false)
//     const hadlelike=()=>{
//         setMessage(!message)
//     }
//   return (
//     <div>
//         <img src="./src/assets/img1 (2).png" alt="not found" />
//         <h1>{message?"like":"notlike"}</h1>
//         <button onClick={hadlelike}>New post</button>
//     </div>
//   )
// }

// export default State1




import React, { useState } from 'react'

function State1() {
    const [message, setMessage] = useState(false)
    const hadlelike = () => {
        setMessage(!message)
    }
    return (
        <div>
            <div><h1 className='display-1 text-bg-dark '>the message card</h1></div>
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="./src/assets/marvel-tokon-3840x2160-23540.jpg" className="card-img-top" alt="no img" />
                    <div className="card-body">
                        <h5 className="card-title">Marvel card</h5>
                        <p className="card-text">new version of the marvel rivels</p>
                        <h1> {message ? "👍" : "👎"} </h1>
                        <a href="#" className="btn btn-primary" onClick={hadlelike}> newpost</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default State1