import React from 'react'
import croppedpistaciafood from '../assets/images/cropped-pistaciafood.png'

const HeroSection:React.FC = () => {
  return (
    <>
      <div className='w-[100%] h-[60vh] text-white text-6xl flex justify-center items-center
       lg:items-center'
     style={{
        backgroundImage: `url(${croppedpistaciafood})`,
        backgroundSize: 'cover',
      }}
      >
        <p className='w-[90%]'>Food  Diary</p>
      </div>
    </>
  )
}

export default HeroSection
