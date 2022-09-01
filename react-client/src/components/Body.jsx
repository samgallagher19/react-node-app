import React from "react";
import Post from "./Post";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


function Body(props) {

  const theme = createTheme();
  console.log(props.posts);

  return <Box sx={{ flexGrow: 1, margin: theme.spacing(2) }}>
          <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h4" align="center">Backlog</Typography>
            <Stack spacing={2}>
            {props.posts.filter(post => post.status === 'backlog').map(post => <Post title={post.title} content={post.content} status={post.status} key={post._id} id={post._id} onUpdatePosts={props.onUpdatePosts}/>)}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" align="center">In Progress</Typography>
            <Stack spacing={2}>
            {props.posts.filter(post => post.status === 'progress').map(post => <Post title={post.title} content={post.content} status={post.status} key={post._id} id={post._id} onUpdatePosts={props.onUpdatePosts}/>)}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" align="center">Complete</Typography>
          </Grid>
          </Grid>
        </Box>;
}

export default Body;