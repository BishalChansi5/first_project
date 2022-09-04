import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA286hUIhRpzSiXWp3C56_wGUbOxBdbcLQ",
    authDomain: "my-todo-apps-d6ab0.firebaseapp.com",
    projectId: "my-todo-apps-d6ab0",
    storageBucket: "my-todo-apps-d6ab0.appspot.com",
    messagingSenderId: "514573001689",
    appId: "1:514573001689:web:31213b2ad281083229efc8",
    measurementId: "G-89V8HE11R0"
  };

const firebase = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
export default db;