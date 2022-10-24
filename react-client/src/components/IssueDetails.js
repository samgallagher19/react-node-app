import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import SquareIcon from '@mui/icons-material/Square';
import DescriptionIcon from '@mui/icons-material/Description';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Stack from '@mui/material/Stack';

function IssueDetails(props) {
    return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem>
        <ListItemIcon>
            <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Description" secondary={props.post.content} />
      </ListItem>
      <Stack direction="row" spacing={1} sx={{mb:2}}>
      <ListItem sx={{ maxWidth: 350 }}>
        <ListItemIcon>
            <SquareIcon />
        </ListItemIcon>
        <ListItemText primary="Status" secondary={props.post.status} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
            <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Assignee" secondary={props.post.assignee.nickname} />
      </ListItem>
      </Stack>
    </List>)
}

export default IssueDetails;