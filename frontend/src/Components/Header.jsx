import React from 'react'
import {assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary text-white rounded-lg px-6 md:px-10 lg:px20' >
      {/* Left side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb[-30px]'>
        <p className='text-3xl md:text-4xl lg:txt-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appoitment <br /> With Our Trusted And Certified Doctors 
        </p>
        <div className='flex flex-col md:flex-row items-center gap-4 text-lg font-light'>
            <img className='w-28' src={assets.group_profiles}/>
            <p>Looking for the right doctor? <br /> Browse, choose, and book with ease, your health journey starts here!</p>
        </div>
        {/* This #speciality is id whenever we will click on book appoitment it will scroll us to speciality section */}
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 text-gray-600 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >
            Book appoitment <img className='w-3' src={assets.arrow_icon}/>
        </a>
      </div>
      {/* Right side */}
      <div className='md:w-1/2 relative '>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img}/>
      </div>
    </div>
  )
}

export default Header
