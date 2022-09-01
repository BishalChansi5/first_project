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

  console.log (inputData);
const handleSubmit= () =>{//function declared
  setTodos([...todos,inputData])//passing the value of array in inputData variable when button is clicked
  setInputData(' ')//making the text box empty after taking value
  
}
function handleRemove(){//function declared
  setTodos([ ])//remove all value of array
}
function deleteTodo(index){
 const newTodos=[...todos]//value of array put in newTodos string[]
 newTodos.splice(index)//delete the value of selected index
 setTodos(newTodos)//remaining value of array after deleting selected value
}
function updateTodo(index){
const newTodos=[...todos]
newTodos.splice(index,1)
setTodos(newTodos)

// setTodos(['hello'])
}
  return (
    <div className='Web'>
        <div className='logo'>
        <h3>Todo APP</h3>
        </div>
        <div className='form'>
            <input
                 type="text" 
                 placeholder='Enter the items' 
                 value={inputData} 
                 onChange={(e)=> setInputData (e.target.value)}
            />
          </div>
          <div className='form-btn'>
            <input 
            type="button" 
            value="Add Todo"
            onClick={handleSubmit}
            />

        </div>


        <div className='lists'>
           <h3>Todo Lists</h3>
           <ul>
            {
            todos.map((todo)=>(
              <li>
                {todo}
                {/* //value of array one at a time */}
                <input type="button" value="edit" onClick={()=> updateTodo(todos.indexOf(todo))}/>
                <input type="button" value="delete" onClick={()=> deleteTodo(todos.indexOf(todo))}/>
              </li>
            ))
          }
            <li></li>
           
           </ul>
        </div>
        <div className='remove'>
            <button onClick={handleRemove}>remove app</button>
        </div>
    </div>
  )
}

export default Web