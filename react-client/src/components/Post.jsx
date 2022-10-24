import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

function Post(props) {

    const { user } = useAuth0();
    console.log(props);
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
        console.log(props.timeLog[0]);
        const patchObj = {id: props.id, status: event.target.name, user: user};
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
      } else if (event.target.name === "assign") {
        
        const patchObj = {id: props.id, assignee: user, user: user};
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

      console.log(props.timeLog);

      event.preventDefault();
    }

    return <Card variant="outlined">
    <CardContent>
    <Typography variant="h5">{props.title}</Typography>
    <Typography variant="body2">
      {props.content}
    </Typography>
    
    <Stack direction="row" spacing={1} sx={{mt:2}}>
    <Typography variant="body2">Created by:</Typography> <Avatar src={props.timeLog[0].user.picture} sx={{ width: 24, height: 24 }} /> <Typography variant="body2">{props.timeLog[0].user.nickname}</Typography>
    </Stack>
    <Stack direction="row" spacing={1} sx={{mt:1}}>
    <Stack direction="row" spacing={1} sx={{mt:0.5}}><Typography variant="body2">Assignee:</Typography> {props.assignee.nickname != "Unassigned" && <Avatar src={props.assignee.picture} sx={{  mt:1, width: 24, height: 24 }} />} <Typography variant="body2">{props.assignee.nickname}</Typography></Stack>
      <Button variant='outlined' name="assign" size="small" onClick={handleClick}>Assign to Me</Button>
        
    </Stack>
     
    
    </CardContent>
    <CardActions>
    {props.status === 'backlog' ? 
      <Button variant="contained" name="progress" onClick={handleClick}>Send to In Progress</Button> : 
        props.status === 'progress'? 
          <Button variant="contained" name="complete" onClick={handleClick}>Send to Complete</Button> : ''}
    <Button variant="outlined" name="delete" onClick={handleClick}>Delete</Button>
    <Link to={'../issue/' + props.id}  style={{textDecoration: 'none' }}><Button variant="outlined" sx={{ml:1}}>View Details</Button></Link>
    
    </CardActions>
  </Card>;
}

export default Post;