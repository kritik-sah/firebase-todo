// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
import firebase from 'firebase'





  const firebassApp = firebase.initializeApp({
    aapiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "fire-todo-xxxxxxxx.firebaseapp.com",
    projectId: "fire-todo-xxxxxxx",
    storageBucket: "fire-todo-xxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxx",
    appId: "1:xxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxx",
    measurementId: "G-xxxxxxxxxxxxxxx"
  })

  const db = firebassApp.firestore();
 
  export { db }
