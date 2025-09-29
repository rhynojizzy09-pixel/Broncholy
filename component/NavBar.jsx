import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()

      const signout = () => {
          const auth = getAuth();
          signOut(auth).then(() => {
          // Sign-out successful.
          navigate('/login')
        }).catch((error) => {
        // An error happened.
    })
  }
  return (
    <div className='flex  justify-between items-center px-[40px] h-[20vh] rounded-[0 8px 0 8px] w-full bg-zinc-950 font-serif shadow-lg'> 
      <div>
        <h1 className=' text-red-500'>Web <span className='text-amber-300'>Design</span></h1>
      </div>
      <ul className='flex gap-[50px] text-white cursor-pointer'>
        <li className='hover:text-amber-300 ' ><Link to='/'>Home</Link></li>
        <li className='hover:text-emerald-500 '> <Link to='/signup'>Sign Up</Link></li>
        <li className='hover:text-fuchsia-500 '> <Link to='/login'>Login</Link></li>
        <li className='hover:text-lime-400 '> <Link to='/about'>About</Link></li>
        <li className='hover:text-amber-300 '>Blog</li>
        <li className='hover:text-amber-300 ' onClick={signout}>Sign out</li>
        <li className='hover:text-amber-300 '> <Link to='/comments'>Comments</Link></li>
        <li className='hover:text-amber-300 '> <Link to='/posts'>Posts</Link></li>
        <li className='hover:text-amber-300 '> <Link to='/country'>Country </Link></li>
        <li><Link to='/page'>TestPage</Link></li>
      </ul>
    </div>
    
  )
}
