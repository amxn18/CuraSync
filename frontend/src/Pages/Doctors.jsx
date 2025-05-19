import React from 'react'
import { useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import { useState, useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Doctors = () => {
  
  const {speciality} = useParams()
  const navigate = useNavigate()
  const [filterDoc, setFilterDoc] = useState([])
  const {doctors } = useContext(AppContext)

  // This fn checks whether the speciality is present in the doctors array
  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  },[doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition all cursor-pointer hover:translate-y-[-10px] transition-all duration-1000' >General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition all cursor-pointer hover:translate-y-[-10px] transition-all duration-1000'>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition all cursor-pointer hover:translate-y-[-10px] transition-all duration-1000'>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition all cursor-pointer hover:translate-y-[-10px] transition-all duration-1000'>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition all cursor-pointer hover:translate-y-[-10px] transition-all duration-1000'>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition all cursor-pointer hover:translate-y-[-10px] transition-all duration-1000'>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index)=> (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow:hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key = {index}>
                  <img className='bg-blue-50 rounded-xl' src={item.image}/>
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-green-500'>
                          <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-md'>{item.name}</p>
                      <p className='text-gray-600 text-sm '>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
