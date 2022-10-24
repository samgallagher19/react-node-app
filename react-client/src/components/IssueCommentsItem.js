import React from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CommentIcon from '@mui/icons-material/Comment';

function IssueCommentsItem(props) {
    const date = new Date(props.item.date);
    return (
        <ListItem key={props.index}>
        <ListItemIcon>
            <CommentIcon />
        </ListItemIcon>
        <ListItemText primary={props.item.comment} secondary={props.item.user.nickname + ' @ ' + date.toUTCString()} />
        </ListItem>
    )
}

export default IssueCommentsItem;