import React, { useState } from 'react'

const Login = () => {

  const[state,setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const onSubmit = async (event) => {
    // Whenever we will submit the form it will not reload the page
    event.preventDefault()
  }
  
  return (
    <form className='min-h-[80vh] flex items-center' action="">
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-bold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book your appointment</p>
        {
          state === 'Sign Up' && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required/>
        </div>
        }
        

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.email)} value={email} required/>
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPass(e.target.pass)} value={pass} required/>
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-full text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
          ? <p>Already have an account ? <span onClick={() => setState('Login')} className='text-gray-600 underline cursor-pointer'>Login</span></p>
          : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-gray-600 underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
