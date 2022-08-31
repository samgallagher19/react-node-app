import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Post(props) {
    function handleClick(event) {
      console.log(props.id);
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

      props.onUpdatePosts();

      event.preventDefault();
    }

    return <Card sx={{ maxWidth: 345 }} variant="outlined">
    <CardContent>
    <Typography variant="h5">{props.title}</Typography>
    <Typography variant="body2">
      {props.content}
    </Typography>
    </CardContent>
    <CardActions>
    {props.status === 'backlog' ? <Button variant="contained">Send to In Progress</Button> : props.status === 'in-progress'? <button>Send Complete</button> : ''}
    <Button variant="outlined" onClick={handleClick}>Delete</Button>
    </CardActions>
  </Card>;
}

export default Post;