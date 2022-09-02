import React, { useEffect, useState } from 'react'
import './Web.css'
const Web = () => {
  const [inputData,setInputData]=useState(' ')
  // local storage ko value ki empty value
  const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('lists')) || [] )

  console.log (inputData);
//use effect to set the todos array to local storage
  useEffect(() => {
      localStorage.setItem('lists',JSON.stringify(todos))
  }, [todos])

//use effect to fetch data from local storage
useEffect(() =>{
   const data =JSON.parse(localStorage.getItem('lists'))
    if(data){
      setTodos(data)
    }
},[])

function handleSubmit(){//function declared
  setTodos([...todos,inputData])//passing the value in array  when button is clicked
  setInputData(' ')//making the text box empty after taking value
  
}
function handleRemove(){//function declared
  setTodos([ ])//remove all value of array
}
function deleteTodo(index){
 const newTodos=[...todos]//value of array put in newTodos string[]
 newTodos.splice(index,1)//delete the value of selected index
 setTodos(newTodos)//remaining value of array after deleting selected value
}
function updateTodo(index){
const newTodos=[...todos]
newTodos.splice(index,1,inputData)
 setTodos(newTodos)
 setInputData(todos[index])
// setInputData(' ')


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
            onClick={ handleSubmit}//calling function first method
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
                <input type="button" value="edit" onClick={()=> updateTodo(todos.indexOf(todo))} id="update"/>
                <input type="button" value="delete" onClick={()=> deleteTodo(todos.indexOf(todo)) } />
              </li>
              // running in loop
            ))
          }
            <li></li>
           
           </ul>
        </div>
        <div className='remove'>
            <button onClick={handleRemove}>remove app</button>
            {/* calling function second method */}

        </div>
    </div>
  )
}

export default Web