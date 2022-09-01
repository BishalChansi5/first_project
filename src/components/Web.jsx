import React, { useState } from 'react'
import './Web.css'
const Web = () => {
  const [inputData,setInputData]=useState(' ')
  const [todos,setTodos]=useState([
    "walk for fresh",
    "Rest a while",
    "Feed a dog",
    "Today is thursday"
  ])

  return (
    <div className='Web'>
        <div className='logo'>
        <h3>Todo APP</h3>
        </div>
        <div className='form'>
            <input type="text" placeholder='Enter the items'/>
            <input type="button" value="Add Todo"/>
        </div>
        <div className='lists'>
           <h3>Todo Lists</h3>
           <ul>
            {
            todos.map((todo)=>(
              <li>{todo}</li>
            ))
          }
            <li></li>
           
           </ul>
        </div>
        <div className='remove'>
            <button>remove app</button>
        </div>
    </div>
  )
}

export default Web