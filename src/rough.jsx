import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './Shop'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import Crud from "./Crud"

  export let userContext=createContext(); //createContext is a built in function
 // console.log(userContext)
function App() 
  
  {  
  
  let [user,setUser]=useState({name:"Yogi",age:"41",mailId:"www.yogi.com"})
//console.log(user);
let[newInput,setNewInput]=useState("")
let[isEdit,setIsEdit]=useState(false);

function handleUpdate()
{
  setIsEdit(true)
}


let [items,setItems]=useState(
  [
    {id:1,label:"java",checked:true},
    {id:2,label:"js",checked:true},
    {id:3,label:"react",checked:false}
  ]
)

let handleChecked=(id)=>{
  let newList=items.map((item)=>{
     return item.id===id?{...item,checked:!item.checked}:item
     
  })
  setItems(newList)
  
}


  return (

    
    <userContext.Provider value={{user}}> 
    <main>
     
        <Crud/>
   
   { //.provider and value is also built in and this to provide data or value
}
    
 
  <input 
 type="text"
  value={newInput} 
  placeholder="Add an Item"
  onChange={(e)=>{setNewInput(e.target.value)}}
  />
            <button>{isEdit?"Save":"Add"}</button>
       {
        //<Shop>
       }

       <ul>
        {
           items.map((item)=>{
          return(
           
            <li key={item.id} className="lists">
             <input type="checkbox" checked={item.checked} onChange={()=>handleChecked(item.id)}/>
             <label>{item.label}</label>
             <FaRegEdit role="button" className="editIcon"tabindex="0" onClick={handleUpdate} />
             <FaRegTrashAlt role="button" className="icon" tabindex="0"/>  
             
            </li>

          )
          
        })
        }
       
       </ul>

 
 

      </main>
     
      </userContext.Provider>
     
     
    
  )
  
 
}

export default App
