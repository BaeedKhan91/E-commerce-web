import React, { useState } from 'react'

function Login() {

  const [currencyState , setCurrencyState] =useState ('Sign Up')

  const onSubmitHandler = async (event)=>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currencyState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
     {currencyState === 'Login'?'':<input type="text" className='w-full px-3 py-2 border border-gray-800 '  placeholder='Name' required />} 
      <input type="email" className='w-full px-3 py-2 border border-gray-800 '  placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800 '  placeholder='Paswword'  required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {
          currencyState === 'Login'
          ? <p onClick={()=> setCurrencyState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=> setCurrencyState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currencyState === 'Login' ? 'Sign In ' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
