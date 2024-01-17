import React from 'react'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 '>
      <div>
        <Logo/>
      </div>
      <div className="flex items-center gap-[40px]">
        <a href="#" className="text-black">Home</a>
        <a href="#" className="text-black">Flashcard</a>
        <a href="#" className="text-black">Contact</a>
        <a href="#" className="text-black">FAQ</a>
        <a href="#" className=" flex justify-center items-center text-white rounded-[32px]
         bg-gradient-to-b from-blue-900 via-blue-600
          to-blue-400 pl-10 pr-10 pb-[13px] pt-[13px]">Login</a>
        {/* Add more navigation links as needed */}
      </div>
    </div>
  )
}

export default Navbar
