import { useState } from 'react'
import Logo from './components/Header/Logo'
import Hero from './components/Hero/Hero'
import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className='w-[1200px] px-2 flex flex-col '>
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
  )
}

export default App
