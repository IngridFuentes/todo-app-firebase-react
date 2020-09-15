import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Todo from './Todo.js'
// import Comment from './Comment.js';
import New from './New.js';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from "firebase";
import { Link } from 'react-router-dom';
import Submit from './Submit';
// import Login from './Login.js';
import Comment from './Comment.js';

function App() {
  // const [todos, setTodos] = useState([]);
  // const [input, setInput] = useState('');

  // const [comments, setComments] = useState([]);
  // const [input, setInput] = useState('');

  const [news, setNews] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // useEffect(() => {
  //     //this code fires when the app.js loads
  //     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //       // console.log(snapshot.docs.map(doc => doc.data().todo));
  //       setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo })))
  //     })
  // }, []);

//   useEffect(() => {
//     //this code fires when the app.js loads
//     db.collection('comments').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
//       // console.log(snapshot.docs.map(doc => doc.data().todo));
//       setComments(snapshot.docs.map(doc =>({id: doc.id, comment: doc.data().comment })))
//     })
// }, []);

useEffect(() => {
  //this code fires when the app.js loads
  db.collection('news').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    // console.log(snapshot.docs.map(doc => doc.data().todo));
    setNews(snapshot.docs.map(doc =>({id: doc.id, new: doc.data().new })))
  })
}, []);


  // const addTodo = (event) => {
  //   event.preventDefault();
  //     db.collection('todos').add({
  //       todo: input,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //     })
  //     // setTodos([...todos, input]);
  //     setInput('');
  // }

  // const addComment = (event) => {
  //   event.preventDefault();
  //     db.collection('comments').add({
  //       comment: input,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //     })
  //     // setTodos([...todos, input]);
  //     setInput('');
  // }
  // const addNew = (event) => {
  //   event.preventDefault();
  //     db.collection('news').add({
  //       new: input,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //     })
  //     // setTodos([...todos, input]);
  //     setInput('');
  // }


  return (
    <div className="App">
      {/* <Navbar/> */}
        <Switch>
          {/*<!-- <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/news" component={Home} /> */}
          <Route exact path="/newest" component={New} />
          {/* <Route exact path="/past" component={Past} /> */}
          <Route exact path="/newcomments" component={Comment} />
          <Route exact path="/submit" component={Submit} />
          {/* <Route exact path="/login" component={Login} /> */}
          </Switch>
        {/* <form> */}
            {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
            {/* <FormControl>
              <InputLabel>Write a Todo</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)}/>
            </FormControl>
            
            <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
              Add Todo
            </Button> 
            {/* <button type="submit" onClick={addTodo}>Add todo</button> */}
        {/* </form> */}
      {/* <ul> */}
        {/* {todos.map(todo => ( */}
          {/* <Todo todo={todo} /> */}
          {/* // <li>{todo}</li> */}
        {/* ))} */}
      {/* </ul> */} 

      {/* <FormControl>
              <InputLabel>Write a Comment</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
            
            <Button disabled={!input} type="submit" onClick={addComment} variant="contained" color="primary">
              Add Comment
            </Button>  */}
        {/* <FormControl>
              <InputLabel>Add News</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
            
            <Button disabled={!input} type="submit" onClick={addNew} variant="contained" color="primary">
              Add New
            </Button> 
             */}
        {/* </form> */}
      {/* {/* <ul> */}
        {/* {comments.map(comment => (
          <Comment comment={comment} /> */}
          {/* // <li>{todo}</li> */}
        {/* ))} */}
      {/* </ul> */}
      <ul>
        {news.map( new1 => (
          <New new={new1} />

        ))}
      </ul>

    </div>
  );
}

export default App;
