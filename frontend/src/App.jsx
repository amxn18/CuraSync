import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/about'
import Contact from './pages/contact'
import Myprofile from './pages/myprofile'
import Myappointments from './pages/myappointments'
import Appointment from './pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/doctors' element= {<Doctors/>}/>
        <Route path='/doctors/:speciality' element= {<Doctors/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/About' element= {<About/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/myprofile' element= {<Myprofile/>}/>
        <Route path='/myappointments' element= {<Myappointments/>}/>
        <Route path='/appointment/:docId' element= {<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
