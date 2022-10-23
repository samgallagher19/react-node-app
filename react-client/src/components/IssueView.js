import React from "react";
import {
    useParams
  } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import BugReportIcon from '@mui/icons-material/BugReport';
import Stack from '@mui/material/Stack';

function IssueView(props) {

    const { id } = useParams();
    console.log(props.posts);
    const [ post ] = props.posts.filter(post => post._id == id);
    console.log(post);
    return(
        <Container maxWidth="lg" sx={{mt:4}}>
        <Stack direction="row" spacing={2} sx={{mb:2}}>
        <Avatar>
            <BugReportIcon />
        </Avatar>
        <Typography variant="h4">{post.title}</Typography>
        </Stack>
        <Typography variant="h5">Issue Details:</Typography>
        <Paper variant="outlined">
        <Typography variant="body1">
        Description: {post.content}
        </Typography>
        </Paper>
        <Paper variant="outlined">
        <Typography variant="body1">
        Status: {post.status}
        </Typography>
        </Paper>
        </Container>
    )
}

export default IssueView;