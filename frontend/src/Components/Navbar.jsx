import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {assets } from '../assets/assets'

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
  
    return (
    <div className='flex  items-center justify-between text-sm py-4 mb-5 border-b border-b gray-400'>
      <h2 onClick = {() => navigate('/')} className='text-[22px] w--44 cursor-pointer'>CuraSync</h2>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/doctors'>
            <li className='py-1'>Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to= '/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact Us</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='`flex items-center gap-4'>
        {/* This block checks if token is true or present then it shows  div with user profile pic and dropdown menu else if token is false then it shows create button */}
        {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img src= {assets.profile_pic} className='w-8 rounded-full'/>
                <img src={assets.dropdown_icon} className='w-2.5'/>
                {/* this grp hover class is for whenever i hover pfp it shows me hidden dropdown menu */}
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4  '>
                        {/* These navigate will redirect to profile and appointments page when we will click on profile and appointments from dropwdown menu */}
                        <p onClick = {() => navigate('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick = {() => navigate('/myappointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick = {() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div> 
            : <button onClick={() => navigate('/login')} className='bg-primary text-black px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
        <img className='w-6 md:hidden mt-2 cursor-pointer' onClick={() => setShowMenu(true)} src={assets.menu_icon}/>
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
            <div className='flex items-center justify-between px-5 py-6'>
                <h1 className='text-2xl'>CuraSync</h1>
                <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon}/>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font:md'>
                <NavLink  onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>Doctors</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About Us</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact Us</p></NavLink>
            </ul>
        </div>
      </div>
      
    </div>
  )
} 


export default Navbar
