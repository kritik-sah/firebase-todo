import { Button, Container ,FormControl ,Input,InputLabel } from '@material-ui/core';
import React ,{ useState , useEffect} from 'react';
import './App.css';
import Todo from './Todo'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {db} from './firebase';
import firebase from 'firebase';

function App() {
  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState('');

useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id : doc.id , todo: doc.data().todo})))
  })
}, [])

const stack = (event) => {
  
 setTodos([...todos , input]);
 db.collection('todos').add({
   todo : input,
   timestamp : firebase.firestore.FieldValue.serverTimestamp()
 })
 event.preventDefault();
 setInput("");
}

  return (
    <div className="App">
    <Container className="task-container" maxWidth="md">
      <h1>Hello & Welcome to Fire-ToDo APP.</h1>
      <form>
      <FormControl>
        <InputLabel >🐱‍🏍Add a Task</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <Button disabled={!input} type='submit' onClick={stack} variant="contained" color="primary" >Stack &nbsp; <AddCircleOutlineIcon /></Button>
      </form>


      <ul>
      {todos.map(todo => (<Todo todo={todo}/>))}
      </ul>
</Container>
    </div>
  );
}

export default App;
