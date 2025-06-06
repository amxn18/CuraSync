import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Myprofile = () => {
  
  const [userData, setUserData] = useState({
    name:"New User",
    image:assets.profile_pic,
    email:'userdummy@gmail.com',
    phone: '9876543210',
    address:{
      line1:"46 Christ Cross, New Town",
      line2: "Church Rode, Texas"
    },
    gender:'Male',
    dob:'2000-01-01'

  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col  gap-2 text-md'>
      <img className='w-36 rounded-full' src={userData.image} />

      {
        isEdit 
        // This onChange changes the previous name to the name written in input field
        ? <input className='bg-gray-50 text-3xl font-md max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/> 
        : <p className='font-md text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 mt-3'>CONTACT DETAILS</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='text-md'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-md'>Phone:</p>
          {
        isEdit 
        ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/> 
        : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-md'>Address:</p>
          {
            isEdit
            ? <p>
              <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address ,line1: e.target.value}}))} value={userData.address.line1} type='text'/>
              <br />
              <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address ,line2: e.target.value}}))} value={userData.address.line2}/>
            </p>
            : <p className='text-gray-500'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font:md'>Gender:</p>
          {
        isEdit 
        ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select> 
        : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font:md'>Birth Date:</p>
        {
          isEdit
          ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
          : <p className='text-gray-400'>{userData.dob}</p>
        }
        </div>
        
      </div>
      <div>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full' onClick={() => setIsEdit(false)}>Save Information</button>
          : <button className='border border-primary px-8 py-2 rounded-full ' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>

    
  )
}

export default Myprofile
