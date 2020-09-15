import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from "firebase";
import Comment from './Comment';
import New from './New';
import { Link } from 'react-router-dom';

function Submit() {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code fires when the app.js loads
    db.collection('news').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo));
      setNews(snapshot.docs.map(doc =>({id: doc.id, new: doc.data().new })))
    })
  }, []);

  const addNew = (event) => {
    event.preventDefault();
      db.collection('news').add({
        new: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      // setTodos([...todos, input]);
      setInput('');
  }

  return( 
      <>

    <FormControl>
                <InputLabel>Add News</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)}/>
    </FormControl>
    
            <Button link disabled={!input} type="submit" onClick={addNew} variant="contained" color="primary">
              Add New
            </Button>
    
    </>
  )

}

export default Submit;