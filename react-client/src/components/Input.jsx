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
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} name="title" type="text" placeholder="Title" value={newPost.title} />
            <textarea onChange={handleChange} name="content" placeholder="post content" value={newPost.content}></textarea>
            <button onClick={handleClick}>SUBMIT EXAMPLE DATA</button>
          </div>;
}

export default Input;