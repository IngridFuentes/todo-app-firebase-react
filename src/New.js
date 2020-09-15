import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4 ,3 ),
    },
}));


function New(props) {
    const classes = useStyles();
    const [ open, setOpen ] = useState(false);
    const [input, setInput] = useState();
    const handleOpen = () => {
        setOpen(true);
    };

    const updateNew = () => {
        //update the todo with the new input text
        //we use set to update in firestore
        db.collection('news').doc(props.new.id).set({
            new: input
        }, { merge: true});

        setOpen(false);
    }


    return (
        <>
        <Modal
            open={open}
            onClose={ e => setOpen(false)} >

        <div className={classes.paper}>
            <h1>I am a modal</h1>
            {/* <input placeholder={props.new.new} value={input} onChange={event => setInput(event.target.value)}/> */}
            <Button onClick={updateNew}>Update</Button>
        </div>

        </Modal>

        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                </ListItemAvatar>
             <ListItemText primary={props.new.new} secondary="Timestamp" />
             </ListItem>
             <button onClick={e => setOpen(true)}>Edit</button>
             <DeleteIcon onClick={ event => db.collection('news').doc(props.new.id).delete() } /> 
        </List>
        </>
    )
}

export default New;
