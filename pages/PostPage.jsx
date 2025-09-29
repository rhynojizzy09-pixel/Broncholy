import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function PostPage() {
  const [post, setpost] = useState([])
  const [selectPost, setselectPost] = useState(null)
  const [loading, setloading] = useState(true)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => (res.json()))
    .then((data) => (setpost(data.slice(0,3))))
    .catch((error)=> (error))
    
 
  }, [])

  const handleSubmit = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => (res.json()))
    .then((data) => (setselectPost(data)))
    .catch((error) => (error))
  }
  
 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => (res.json()))
    .then((data) => {
                     setpost(data.slice(0,5)) 
                     setloading(false)})
           
    .catch((error)=> (error))
 
 }, [])
 

  return (
    <div>
      {
        loading ? (<p className='text-center'><ClipLoader size={50} color='red'/> </p> ) 
        : (
           <div>
        {
          post.map((eachpost) => (
            <div>
              <p>{eachpost.id}</p>
              <h1 className='text-orange-900'>{eachpost.title}</h1>
              <p className='text-fuchsia-600'>{eachpost.body} <span onClick={() =>handleSubmit(eachpost.id)} className='text-yellow-500 cursor-pointer'>see more</span></p>
            </div>
          ))
        }
      
      </div>
        )
      }
     
       {
           selectPost && 
            <div className='bg-red-600'>
              <h1>{selectPost.title}</h1>
              <h1>{selectPost.body}</h1>
           </div>
       }
    </div>
  )
}
