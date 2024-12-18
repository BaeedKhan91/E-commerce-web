import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = '$';
    const deliver_fee='10'
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch] =useState(false)
    const [cartItmes,setCartItems]=useState({});

    const addToCart =async (itemId,size) => {

        if(!size){
            alert('please select size')
            return;
        }

        let cartData = structuredClone(cartItmes)

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1
            }
            else{
                cartData[itemId][size] = 1
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
    }

    
   const getCartCount =()=>{
    let totalCount = 0
    for(const items in cartItmes){
        for(const item in cartItmes[items]){
            try {
                if (cartItmes[items][item]>0) {
                    totalCount += cartItmes[items][item];
                }
                
            } catch (error) {
                
            }
        }
    }
    return totalCount
   }

    const value={
        products, currency ,deliver_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItmes,addToCart,
        getCartCount
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
    
    
}

export default ShopContextProvider