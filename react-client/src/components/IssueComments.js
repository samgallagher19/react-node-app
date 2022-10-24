import React, { useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Stack from '@mui/material/Stack';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useAuth0 } from '@auth0/auth0-react';
import IssueCommentsItem from './IssueCommentsItem';

function IssueComments(props) {
    const { user } = useAuth0();
    const [newComment, setNewComment] = useState('');

    function handleChange(event) {
        const {name, value} = event.target;
        setNewComment(value);
    }

    function handleClick(event) {
        const patchObj = {id: props.post._id, comment: newComment, user: user};
        fetch('/posts', {
          method: 'PATCH', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(patchObj),
        }).then((response) => response.json())
        .then((newPost) => {
          console.log('Success:', newPost);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        setNewComment('');
        props.onUpdatePosts();

        event.preventDefault();

      }

    if(props.post.comments.length === 0) {
        return (
            <div>
            <TextField
              id="outlined-textarea"
              label="New Comment"
              name="comment"
              multiline
              sx={{mb:2, ml:9, mt:3, minWidth:550}}
              onChange={handleChange}
              value={newComment}
            />
            <Fab color="primary" aria-label="add" sx={{ml:-2}} onClick={handleClick}>
                <AddIcon />
            </Fab>
            </div>
        )
    }

    return (
        <div>
        <List dense="true" sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.post.comments.map((item, index) => <IssueCommentsItem item={item} index={index} />)}
        </List>
        <TextField
          id="outlined-textarea"
          label="New Comment"
          name="comment"
          multiline
          sx={{mb:2, ml:9, mt:3, minWidth:550}}
          onChange={handleChange}
          value={newComment}
        />
        <Fab color="primary" aria-label="add" sx={{ml:-2}} onClick={handleClick}>
            <AddIcon />
        </Fab>
        </div>
    )
}

export default IssueComments;