import React from "react";
import Input from "./Input";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BugReportIcon from '@mui/icons-material/BugReport';
import ProjectSelector from './ProjectSelector';
import ViewButtons from './ViewButtons';
import AuthenticationButton from './AuthenticationButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

const clientId = "942096996649-p7fs4580cci6ai7o0m63klicvff1cl5l.apps.googleusercontent.com";

export default function Header(props) {

  const { isAuthenticated, user } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: 'inherit', color: 'inherit' }}><BugReportIcon /></Link>
          <Typography variant="h6" component="div" sx={{ display: 'flex', mr: 2 }}>
          <Link to="/" style={{textDecoration: 'inherit', color: 'inherit' }}>BugTracker</Link>
          </Typography>
          
          {isAuthenticated && <ProjectSelector />}
          {isAuthenticated && <ViewButtons/>}
          <Box sx={{flexGrow: 1}}/>
          {isAuthenticated && <Input onUpdatePosts={props.onUpdatePosts}/>}
          <AuthenticationButton location="navbar" />
          {isAuthenticated && <Avatar src={user.picture} />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}