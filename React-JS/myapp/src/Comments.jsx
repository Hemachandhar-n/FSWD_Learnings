import React, { useEffect, useState } from 'react'

function Comments() {
    const [Com, setCom] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/comments")
            .then((res) => res.json())
            .then((data) => setCom(data))
            .catch((err) => console.log(err))
    }, [])
    return (
 <div>
    <h1>comments list</h1>
    {Com.map((post)=>(
        <>
        <h1>iD:{post.id}</h1>
        <h2>Name:{post.name}</h2>
        <h2>email:{post.email}</h2>
        <h4>comments:{post.comment}</h4>
        </>
    ))}
    </div>
    )
}

export default Comments