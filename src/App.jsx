import { useState } from 'react'

import './App.css'
import AboutPage from '../pages/AboutWeather'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import NavBar from '../component/NavBar'

import Footer from '../component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
import CommentsPage from '../pages/CommentsPage'
import PostPage from '../pages/PostPage'
import AboutWeather from '../pages/AboutWeather'
import Country from '../pages/Country'
import TestPsge from '../pages/TestPsge'
  

function App() {

  return (
    <>
      <ToastContainer />
     <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route  element={<LoginPage/>} path='/login'/>
        <Route  element={<SignUpPage/>} path='/signup'/>
        <Route  element={<CommentsPage/>} path='/comments'/>
        <Route element = {<PostPage/>} path='/posts'/>
        <Route element = {<AboutWeather/>} path='/about'/>
        <Route element = {<Country/>} path='/country'/>
         <Route element = {<TestPsge/>} path='/page'/>

      </Routes>
       <Footer/>
      </BrowserRouter>
     
     
     
    </>
  )
}

export default App
