import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {

    const {currency,deliver_fee,getCartAmount} =useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART' } text2={"TOTALS"}/>
        </div>
        <div className='flex flex-col gap-2 text-sm'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>{currency} {deliver_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : parseInt(getCartAmount() + deliver_fee)}.00</b>
                
                
            </div>
        </div>
    </div>
  )
}

export default CartTotal