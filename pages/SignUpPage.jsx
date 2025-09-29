import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../fire/config';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import {  signOut } from "firebase/auth";




export default function SignUpPage() {
   const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    
    
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!username || !email || !password || !confirmpassword) {
        console.log('All fiels are empty or required')
        toast.error('All fields are empty or required')
      }
      if (!emailValidate(email)) {
         toast.error('please enter a valid email')
      }

      if (password.length < 6) {
        toast.error('Password is too short')
        
      }

      if (password.includes(123)) {
        toast.error('password is weak')
        
      }
        if (password !== confirmpassword) {
          toast.error('Passwords do not match')
        }

     
      

      const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          toast.success('Account created successfully')
          // ...
          navigate('/login')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          toast.error('Account not created')
        });

       
       setemail('')
       setusername('')
       setpassword('')
       setconfirmpassword('')
      toast.success('You have signed up successfully')

    }

     const googleSignup = () => {
        
        const auth = getAuth();
        signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        navigate('/')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
        }

      
      
    const emailValidate = (email) => {
      let emailpattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      return emailpattern.test(email)
    }
  return (
   <div className='justify-center text-center'>
      <div className='uppercase my-[15px] ]'>
      <h1>Sign Up</h1>
      </div>
      <div>
      <form action="" onSubmit={handleSubmit}>
        <input  className='border w-[500px] ' type="text" placeholder=' username' onChange={(e)=>setusername(e.target.value)} value={username}/> <br />
        <input className='border  w-[500px] my-[10px]' type="text" placeholder ='Phone number, or email' onChange={(e)=>setemail(e.target.value)} value={email}/><br />
        <input className= 'border w-[500px]' type="text" placeholder='Password' onChange={(e)=>setpassword(e.target.value)} value={password}/><br />
        <input className='border w-[500px] my-[10px]' type="text" placeholder='Confirm  password'onChange={(e)=>setconfirmpassword(e.target.value)} value={confirmpassword} /> <br />
        <button className='border w-[500px] my-[10px]' type="submit" >Sign Up</button>
      </form>
      </div>
        <p>Already have an account?<span className='cursor-pointer'><Link to='/login'>Login </Link></span></p>
        <div>
          <button className='border w-[500px] my-[10px]' onClick={googleSignup}>Sign up with Google</button>
         
        </div>
        

    </div>
  )
}
