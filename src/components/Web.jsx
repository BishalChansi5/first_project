import React from 'react'
import './Web.css'
const Web = () => {
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
            <li>Hello</li>
            <li>Task 1</li>
            <li>Task 3</li>
           </ul>
        </div>
        <div className='remove'>
            <button>remove app</button>
        </div>
    </div>
  )
}

export default Web