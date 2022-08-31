import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Input(props) {
    const [newPost, setNewPost] = useState({title: '', content: '', status: 'backlog'});

    function handleChange(event) {
      const {name, value} = event.target;
      setNewPost((prevPost) => {return {...prevPost, [name]: value}});
    }


    function handleClick(event) {
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
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleChange} name="title" value={newPost.title} />
            <TextField
            onChange={handleChange} name="content" value={newPost.content}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Post Content"
        />
            <Button onClick={handleClick} variant="contained">Submit</Button>
          </div>;
}

export default Input;