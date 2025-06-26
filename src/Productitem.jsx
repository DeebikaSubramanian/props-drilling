import React from 'react'
import Productdetails from './Productdetails'
//import './App.css'

//This child component
//recieving props. it must have only one paramater and that must be a property. any name can be. here we use props
//The otherway is destructure the props in the parameter, that is good practice.
// Example, const Productitem=({product})=>{}


const Productitem = (props) => {
    //console.log(props)

    //destucturing props

    let {product}=props
    //console.log(product)

  return (
    <div><h1>Displaying Items</h1>
   
    <Productdetails 
        drillName={product.name}
        drillPrice={product.price}
        drillDes={product.description}
    />
     
    </div>
  )
}

export default Productitem