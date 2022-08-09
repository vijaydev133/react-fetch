import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [state,setState] = useState("")
    const {id} = useParams()


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setState(data))
    },[])

  return (
    <div className='detail-cont' >
        <div className="detail-item">
        <h3>Id</h3>
        <p>{state.id}</p>
        <h3>Title</h3>
        <p>{state.title}</p>
        <h3>Desc</h3>
        <p>{state.body}</p>
        </div>
        
    </div>
  )
}

export default Detail