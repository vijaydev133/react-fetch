import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const [p, setP] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => res.json())
        .then(data => setP(data))
    },[])



    function handleClick(id){
        navigate(`/detail/${id}`)
    }

    return(
        <div>
            {p.map((para)=>{
                return (<li onClick={()=>handleClick(para.id)} key={para.id}>{para.title}</li>)
            })}
        </div>
    )
}