import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titlle from './../components/Title'

function Orders() {

  const {products ,currency} =useContext (ShopContext)

  return (
    <div className='border-t pt-16 '>
      <div className='text-2xl'>
        <Titlle text1={'MY'} text2={"ORDERS"}/>
      </div>

      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start text-sm gap-6'>
                <img className='' src={item.image[0]} alt="" />
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
