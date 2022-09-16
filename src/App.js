import React, { useEffect, useState } from 'react';
import './App.css';

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';

//import firebase files
import db from './firebase_eg';
import firebase from 'firebase';

import Todo from './Components/Todo'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // useEffect(() => {
    //getting value from database in do-while loop
    //this code here...fires when the APP.js loads
  //   db.collection('todos')//todos is collection(database) name
  //     .orderBy('timestamp', 'desc')//timestamp ko basis bata data order(descending) ma dekhaune 
  //     .onSnapshot(snapshot => {
  //       setTodos(snapshot.docs.map(
  //         doc => ({ timestamp: doc.timestamp, todo: doc.data().todo })
  //       ))
  //     })
  // }, [input]);//input change vayo vane database bata value liyauxa

  useEffect(() => {
    // this code here... fires when the App.js loads
    db.collection('todos')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(
        doc => ({id: doc.id, todo: doc.data().todo})
        ))
    })
  }, [input]);
  


  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the refresh

     // Write to database (CREATE)
     db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }


  return (
    <div className="App">
      <h1> Let's Build Todo</h1>
      <form>
        <Input
          placeholder="Enter your Todo"
          value={input}
          onChange={event => setInput(event.target.value)}
          className="input"
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>
      <ul>
      {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
      <Button
        variant="contained"
        className="removeall"
        color="error"
      >
        Remove All
      </Button>
    </div >
  );
}

export default App;