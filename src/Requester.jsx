import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Requester() {
    const [myResponse,setMyResponse]=useState("")
    const [responseArray,setResponseArray]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>{
            setMyResponse(response.data.title)
            // console.log(response.data)
        })

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setResponseArray(response.data)
        })
    },[])

  return (
    <>
        <div>{myResponse}</div>
        <div>
            {
                responseArray.map((post)=>{
                    return <div key={post.id}>{post.body}</div>
                })
            }
        </div>
    </>
  )
}

export default Requester