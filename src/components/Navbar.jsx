import React, { useState } from 'react'
import {logo , close , menu } from '../assets'
import {navLinks} from '../constants'


const Navbar = () => {

    const [toggle , setToggle] = useState(false)

  return (
    <nav className='flex justify-between items-center w-full py-6'>

        {/* Company Logo */}
      <img className='w-[124px] h-[32px]' src={logo} alt="logo" />

        {/* Looping form constants folder */}
      <ul className='hidden sm:flex list-none flex-1 justify-end items-center'>
        {navLinks.map(item => (
          <li 
          key={item.id}
          className="mr-10 last:mr-0 font-poppins font-normal cursor-pointer text-[16px]"
          > 
          <a href={`#${item.id}`}> 
            {item.title}
          </a></li>
        ))}
      </ul>

      {/* Mobile Devices Icons show only if it toggle or not */}
      <div className='flex-1 flex justify-end items-center sm:hidden'> 
      <img 
      className='sm:hidden w-[32px] h-[32px]' 
      src={toggle ?  close : menu } 
      alt="menu"
      onClick={() => setToggle(prev => !prev)} />
      </div>

      {/* Mobile Devices Menu panal after click*/}
      <div className={`${toggle ? "flex" : "hidden"}
      absolute p-6 top-20 right-0 mx-4 my-2  min-w-[140px] bg-black-gradient sidebar rounded-xl sm:hidden `}>
          <ul className='flex flex-col flex-1 items-center justify-center sm:hidden'>
            {navLinks.map(item => (
              <li
              key={item.id}
              className=" font-poppins mb-3 sm:hidden">
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
