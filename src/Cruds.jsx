import React from 'react'
import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './Shop'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";



const Cruds = () => {

let[newInput,setNewInput]=useState("")
let[isEdit,setIsEdit]=useState(false);
let [currentId,setCurrentId]=useState(null);


let handleUpdate=(id)=>
{
  let listItem=items.find(item=>item.id===id)
  //console.log(listItem)
  setNewInput(listItem.label)
  setIsEdit(true)
  setCurrentId(id)
}


let [items,setItems]=useState(
  [
    {id:1,label:"java",checked:true},
    {id:2,label:"js",checked:true},
    {id:3,label:"react",checked:false}
  ]
)

let handleAddorSave=()=>
{
  if(isEdit)
  {
    let newList=items.map((item)=>
    {
      return item.id===currentId? {...item,label:newInput} : item
    })
    setItems(newList)
    setCurrentId(null)
  }
  else{
    setItems([...items,{id:items.length+1, label:newInput, checked:false}])
    setNewInput("")
  }
  
}

let handleChecked=(id)=>{
  let newList=items.map((item)=>{
     return item.id===id?{...item,checked:!item.checked}:item
     
  })
  setItems(newList)
  
}

let handleDelete=(id)=>{
  let afterDelete=items.filter(item=>item.id!==id)
  .map((item,index)=>{
    return {...item,id:index+1}
  
  })

  setItems(afterDelete)
  console.log(afterDelete)
}


  return (
  

      <main>
       
 <input 
 type="text"
  value={newInput} 
  placeholder="Add an Item"
  onChange={(e)=>{setNewInput(e.target.value)}}
  />
            <button onClick={handleAddorSave}>{isEdit?"Save":"Add"}</button>
     

       <ul>
        {
           items.map((item)=>{
          return(
           
            <li key={item.id} className="lists">
             <input type="checkbox" checked={item.checked} onChange={()=>handleChecked(item.id)}/>
             <label>{item.label}</label>
             <FaRegEdit role="button" className="editIcon"tabIndex="0" onClick={()=>handleUpdate(item.id)} />
             <FaRegTrashAlt role="button" className="icon" tabIndex="0" onClick={()=>handleDelete(item.id)} />  
             
            </li>

          )
          
        })
        }
       
       </ul>


     
      </main>
      
      
    
  )
}

export default Cruds