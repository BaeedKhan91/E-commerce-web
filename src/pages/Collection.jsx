import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'

function Collection() {
  const {products, search ,showSearch} = useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false)
  const [filterProducts,setFilterProducts]=useState([])
  const [categorey,setCategorey] =useState([])
  const [subCategory,setSubCategorey]=useState([])
  const [sortType,setSortType] =useState('relevant')

  const toggleCategory=(e)=>{
    if(categorey.includes(e.target.value)){
      setCategorey(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategorey(prev=>[...prev,e.target.value])
    }
  }

const toggleSubCategory=(e)=>{
  if(subCategory.includes(e.target.value)){
    setSubCategorey(prev=>prev.filter(item=> item !== e.target.value))
  }
  else{
    setSubCategorey(prev=>[...prev,e.target.value])
  }
}

  const applyFilter=()=>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(categorey.length > 0){
       productsCopy=productsCopy.filter(item=> categorey.includes(item.category))

    }
    if(subCategory.length > 0){
      productsCopy=productsCopy.filter(item=> subCategory.includes(item.subCategory))
      }

    setFilterProducts(productsCopy)
  }
  const sortProduct=()=>{
    let fpCopy=filterProducts.slice()

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;

        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
          break;

          default:
            applyFilter();
            break;
    }
  }


    useEffect(()=>{
      setFilterProducts(products)
    },[])

    useEffect(()=>{
      applyFilter()
    },[categorey,subCategory,search,showSearch])

    useEffect(()=>{
      sortProduct();
    },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* Categorey Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'> 
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        <div>
          {/* SubCATEGORY Fliter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'> 
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: high to low</option>
          </select>
        </div>
        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          //   .map((item,index)=>(
          //     <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          // ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
