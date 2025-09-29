import React, { useEffect, useState } from 'react'

export default function () {
   const [comment, setcomment] = useState([])
   
   useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/comments')

     .then((res) => res.json())
     .then((data) => (
       setcomment(data.slice(0,10))
     ))
     .catch((error) => (
        (error)
     ))


   }, [])


   

  return (
    <div>
       <div>
          {
            comment.map((eachcomment) => (
              <div>
                <p>{eachcomment.id}</p>
                <h1 className='text-green-400'>{eachcomment.name}</h1>
                <p className='text-gray-600'>{eachcomment.body}</p>
              </div>
            )
          )
          }
       </div>
    
       
    </div>
  )
}
