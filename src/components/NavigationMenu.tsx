import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu:React.FC=()=>{
  return (
    <>
    <div className='flex justify-center items-center h-36'>
        <div>
            <nav >
                <div className='border-y-2 h-12 flex items-center space-x-12 px-12 text-xl font-semibold text-[#84BD00]'>
                    <NavLink to='/Home'>Home</NavLink>
                    <NavLink to='/Home'>Explore</NavLink>
                    <NavLink to='/Home'>Help</NavLink>
                    <NavLink to='/Home'>Profile</NavLink>
                </div>
            </nav>
        </div>
    </div>
      
    </>
  )
}

export default NavigationMenu
