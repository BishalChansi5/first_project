import React from 'react';
import './Hello.css';

const Hello = ({place}) => {
  return (
    <div>
        <input type="text"/>
        <input type="submit" name="submit"/>
        <ul type="disc">
           <li>Task 1</li>
           <li>Task 2</li>
           <li>Task 3</li> 
        </ul>
    <p>Hello this is me {place}.</p>
    </div>
  )
}

export default Hello

