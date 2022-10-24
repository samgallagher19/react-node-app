import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Avatar from '@mui/material/Avatar';
import IssueHistoryItem from './IssueHistoryItem';

function IssueHistory(props) {
    return (
        <List dense="true" sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.post.timeLog.map((item, index) => <IssueHistoryItem item={item} index={index} />)}
        </List>
    )
}

export default IssueHistory;