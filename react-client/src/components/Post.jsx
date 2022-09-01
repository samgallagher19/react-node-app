import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Post(props) {
    function handleClick(event) {
      console.log(props.id);
      
      if(event.target.name === 'delete') {
        console.log("Delete Button Pushed");
      const idObj = {id: props.id};
      fetch('/posts', {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(idObj),
      }).then((response) => response.json())
      .then((idObj) => {
        console.log('Success:', idObj);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      } else if (event.target.name === 'progress' || event.target.name === 'complete') {
        console.log("Progress Button Pushed");
        const patchObj = {id: props.id, status: event.target.name};
        fetch('/posts', {
          method: 'PATCH', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(patchObj),
        }).then((response) => response.json())
        .then((patchObj) => {
          console.log('Success:', patchObj);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }

      props.onUpdatePosts();

      event.preventDefault();
    }

    return <Card variant="outlined">
    <CardContent>
    <Typography variant="h5">{props.title}</Typography>
    <Typography variant="body2">
      {props.content}
    </Typography>
    </CardContent>
    <CardActions>
    {props.status === 'backlog' ? <Button variant="contained" name="progress" onClick={handleClick}>Send to In Progress</Button> : props.status === 'progress'? <Button variant="contained" name="complete" onClick={handleClick}>Send Complete</Button> : ''}
    <Button variant="outlined" name="delete" onClick={handleClick}>Delete</Button>
    </CardActions>
  </Card>;
}

export default Post;