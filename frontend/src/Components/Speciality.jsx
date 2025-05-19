import React from 'react'
import {specialityData} from '../assets/assets'
import {Link} from 'react-router-dom'
import {assets } from '../assets/assets'

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' id='speciality'>
      {/* we already have speciality order in a array stored in assest.js so we will import it */}
      
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-1/3 text-center text-md'>Explore our trusted doctor directory and book your appointment with ease, healthcare made simple!</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {/* This map fn maps each image to particular speciality from the objects present in array in assets.js */}
        
        {specialityData.map((item, index) => (
            <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-sm cursor-pointe flex-shrinl-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to= {`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image}/>
                <p>{item.speciality}</p>
            </Link> 
        ))}
      </div>
    </div>
  )
}

export default Speciality
