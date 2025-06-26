import React from 'react'
import { useState } from 'react'
import Productitem from './Productitem'

//This is parent component


const Shop = () => {
    let [Product,setProduct]=useState(
        {
            name:"iPhone",
            price:30000,
            description:"32Gb Ram,5.3inch screen"
        })
  return (
    <div><h1>Welcome to our Shop</h1>
    {//sending prop to product component. it must be an object literal. so its in curly brace} 
}
    <Productitem product={Product}/>  
    </div>
  )
}

export default Shop