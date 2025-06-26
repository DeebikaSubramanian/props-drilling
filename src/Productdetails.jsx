import React, { useContext } from 'react'
//import { userContext } from './App'


const Productdetails = ({drillName,drillPrice,drillDes}) => {

    
let {user}=useContext(userContext);  
//This {user} comes from userContext from app.jsx file. That is use of useContext. 
// we can directly access variables from other file.
    
    return (

    <div>
        <section>
    <h3>UserDetails</h3>
    <p>UserName:{user.name}<br/>
    UserAge:{user.age}<br/>
    UserMailId:{user.mailId}</p>
</section>
        Productdetails
         <section>
             <h3>{drillName} </h3>
             <p>{drillPrice} 
             {drillDes} </p>
            </section>
    </div>

  )
}

export default Productdetails