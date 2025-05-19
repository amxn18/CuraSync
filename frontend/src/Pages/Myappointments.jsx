import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const Myappointments = () => {
  
  const {doctors} = useContext(AppContext)
  
  return (
    <div>
      <p className='pb-6 mt-6 text-center font-md text-zinc-700 border-b'>My Appoitments</p>
      <div>
        {doctors.slice(0,3).map((item, index) => (
          <div className='grid grid-cols -[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50 rounded-full' src={item.image}/>
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-nutral-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-zinc-700 font-md mt-1'>Address:</p>
              <p className='text-sm'>{item.address.line1}</p>
              <p className='text-sm'>{item.address.line2}</p>
              <p className='text:sm mt-1'><span className='text:sm text-neutral-700 font-medium'>Date & time: </span>03/02/2025 | 8:30pm</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-center'>
              <button className='text-sm text:stone-500 text-center sm:min-w-48 py-2 border rounded-full hover:bg-primary transition-all duration-300'>Pay Online</button>
              <button className='text-sm text:stone-500 text-center sm:min-w-48 py-2 border rounded-full hover:bg-red-400 transition-all duration-300'>Cancel Appoitment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myappointments
