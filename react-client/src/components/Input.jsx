import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth0 } from '@auth0/auth0-react';


function Input(props) {
    const { user } = useAuth0();
    const [newPost, setNewPost] = useState({title: '', content: '', status: 'backlog', user: user.sub});

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    function handleChange(event) {
      const {name, value} = event.target;
      setNewPost((prevPost) => {return {...prevPost, [name]: value}});
    }


    function handleClick(event) {
        handleClose();
        fetch('/posts', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        }).then((response) => response.json())
        .then((newPost) => {
          console.log('Success:', newPost);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        props.onUpdatePosts();

        event.preventDefault();

      }

      return <div>
      <Button variant="contained" color="info" onClick={handleClickOpen}>
      Add New Issue
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth="true" maxWidth="sm">
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Provide a title and a description for this new issue.
          </DialogContentText>
          <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
          <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleChange} name="title" value={newPost.title} />
          <TextField
          name="content"
          id="outlined-multiline-static"
          label="Issue Details"
          multiline
          rows={4}
          defaultValue="Issue Details"
          onChange={handleChange}
          value={newPost.content}
        />
        </Stack>
        </Box>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClick} variant="contained">Submit</Button>
        </DialogActions>
        </Dialog>

    </div>;
}

export default Input;