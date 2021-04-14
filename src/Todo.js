import React from 'react';
import { Avatar, List, ListItem ,ListItemAvatar,ListItemText ,IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import {db} from './firebase'

const Todo = (Props) => {
    return (

        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                      <AlarmOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText primary={Props.todo.todo} secondary="50 Exp."> </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton onClick={event => db.collection('todos').doc(Props.todo.id).delete()} edge="end" aria-label="delete">
                      <DeleteForeverIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
            </ListItem>
        </List>
        
    )
}

export default Todo
