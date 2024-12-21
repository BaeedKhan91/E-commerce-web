import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

function contact() {
  return (
    <div >
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]'  alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-medium text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>1726/298-b baldia town <br /> karachi, sindh, Pakistan </p>
          <p className='text-gray-500'>Tel : (0316) 2364-385 <br />Email : Baeedk7@gmail.com</p>
          <p className='font-semibold text-xl text-gray-500'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job opening </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs </button>
        </div>
      </div>
    </div>
  )
}

export default contact
