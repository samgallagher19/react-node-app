import React from "react";
import Post from "./Post";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


function Body(props) {

  const theme = createTheme();
  console.log(props.posts);

  return <Box sx={{ flexGrow: 1, margin: theme.spacing(2) }}>
          <Grid container spacing={2}>
            {props.posts.map(post => <Grid item xs={4}><Post title={post.title} content={post.content} status={post.status} key={post._id} id={post._id} onUpdatePosts={props.onUpdatePosts}/></Grid>)}
          </Grid>
        </Box>;
}

export default Body;