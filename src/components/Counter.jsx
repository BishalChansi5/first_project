import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const[count,setCount]=useState(0);
    const[message,setMessage]=useState('');
    function increase(){
      setCount(count+1);
    }
    function decrease(){
     if(count===0){
        setMessage("Count cannot be negative");
        setCount(0);
     }
     else{
        setCount(count-1);
     }
    }
    function reset(){
        setCount(0);
    }
  return (
    <div className='container'>
        <h1>Counter Application</h1>
        <h1>{count}</h1><br></br><br></br>

    <button className='add' onClick={increase}>Add</button>
    <button className='reset' onClick={reset}>Reset</button>
    <button className='subtract' onClick={decrease}>Subtract</button>
     
     
    <h1 >{message}</h1>
     
    </div>
  )
}

export default Counter