import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu:React.FC=()=>{
  return (
    <>
    <div className='flex justify-center items-center h-36'>
        
            <nav  >
                <div className='border-y-2 h-12 md:flex items-center space-x-12 px-12 text-xl font-semibold text-[#84BD00]'>
                    <NavLink to='/Home'>Home</NavLink>
                    <NavLink to='/Home'>Explore</NavLink>
                    <NavLink to='/Home'>Help</NavLink>
                    <NavLink to='/Home'>Profile</NavLink>
                </div>
            </nav>
        
    </div>
      
    </>
  )
}

export default NavigationMenu
