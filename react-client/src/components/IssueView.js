import React from "react";
import {
    useParams
  } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import BugReportIcon from '@mui/icons-material/BugReport';
import Stack from '@mui/material/Stack';
import IssueDetails from './IssueDetails';
import IssueHistory from './IssueHistory';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from './Loading';
import IssueComments from './IssueComments';

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
            <Typography variant="h5">Details</Typography>
            <IssueDetails post={post} />
            <Typography variant="h5">Comments</Typography>
            <IssueComments post={post} onUpdatePosts={props.onUpdatePosts} />
            <Typography variant="h5">History</Typography>
            <IssueHistory post={post} />
        </Container>
    )
}

export default withAuthenticationRequired(IssueView, {
    onRedirecting: () => <Loading />,
  });