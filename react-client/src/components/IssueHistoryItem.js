import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Avatar from '@mui/material/Avatar';

function IssueHistoryItem(props) {
    const icons = {
        create : <Avatar sx={{ width: 36, height: 36 }}><AddIcon /></Avatar>,
        status : <Avatar sx={{ width: 36, height: 36 }}><MoveDownIcon /></Avatar>,
        assign : <Avatar sx={{ width: 36, height: 36 }}><PersonAddIcon /></Avatar>,
    }
    const logKey = props.item.key;
    console.log("KEY");
    console.log(logKey);
    const date = new Date(props.item.date);
    return (
        <ListItem key={props.index}>
        <ListItemAvatar>
          {icons[logKey]}
        </ListItemAvatar>
        <ListItemText primary={props.item.label} secondary={date.toUTCString()} />
      </ListItem>
    )
}

export default IssueHistoryItem;