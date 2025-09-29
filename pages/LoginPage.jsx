import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
     const navigate =   useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault()
       if (!email || !password) {
      toast.error('All fields are required')
        } 


   const auth = getAuth();
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    toast.success('Login successfully')
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error('Not login')
  }); 
  
  setemail('')
  setpassword('')

   }
  

  return (
    <div className='justify-center text-center'>
      <div className='uppercase my-[15px] ]'>
      <h1>Login</h1>
      </div>
      <div>
      <form action="" onSubmit={handleSubmit} >
  
        <input className='border  w-[500px] my-[10px]' type="text" placeholder ='Phone number, or email' onChange={(e)=>setemail(e.target.value)} value={email}/><br />
        <input className= 'border w-[500px]' type="text" placeholder='Password' onChange={(e)=>setpassword(e.target.value)} value={password}/><br />
        <button className='border w-[500px] my-[10px]' type="submit" >Login</button>
      </form>
      </div>
      <p>Don't have an account?<span className='cursor-pointer'><Link to='/signup'>Signup</Link></span></p>
    </div>
    
  )
}
