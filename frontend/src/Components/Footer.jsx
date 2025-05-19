import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    
    const navigate = useNavigate()
    return (
    <div className='md:mx-10'>
      {/* left */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-md'>
      <div>
        <h1 className='text-xl font-bold mb-2 '>CuraSync</h1>
        <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Curasync is an online doctor appointment platform that connects patients with healthcare professionals, offering convenient booking, personalized care, and seamless access to medical consultations from anywhere.</p>
      </div>
      {/* centre */}
      <div className='cursor-pointer'>
        <p className='text-xl font-md mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li onClick={() => {navigate('/'); scrollTo(0,0)}}>Home</li>
            <li onClick={() => {navigate('/About'); scrollTo(0,0)}}>About Us</li>
            <li onClick={() => {navigate('/contact'); scrollTo(0,0)}}>Contact Us</li>
            <li>Pivacy policy</li>
        </ul>
      </div>
      {/* Right */}
      <div>
        <p className='text-xl font-md mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+(415)555-0132</li>
            <li>curasynccare@gmail.com</li>
        </ul>
      </div>
      </div>
      <div>
        {/* Copyright */}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@CuraSync-All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
