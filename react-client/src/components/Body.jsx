import React from "react";
import Post from "./Post";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Body(props) {


      
  console.log(props.posts);

  return <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {props.posts.map(post => <Grid item xs={8}><Post title={post.title} content={post.content} status={post.status} key={post._id} id={post._id} onUpdatePosts={props.onUpdatePosts}/></Grid>)}
          </Grid>
        </Box>;
}

export default Body;