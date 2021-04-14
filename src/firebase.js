// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
import firebase from 'firebase'





  const firebassApp = firebase.initializeApp({
    aapiKey: "AIzaSyBoBTIDEFgmbmxY7oHW-cph6o3Q5s35Z3U",
    authDomain: "fire-todo-c78a0.firebaseapp.com",
    projectId: "fire-todo-c78a0",
    storageBucket: "fire-todo-c78a0.appspot.com",
    messagingSenderId: "134273826363",
    appId: "1:134273826363:web:73196843604abb9df7a61e",
    measurementId: "G-P3KR6RZ75J"
  })

  const db = firebassApp.firestore();
 
  export { db }