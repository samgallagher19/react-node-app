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

const clientId = "942096996649-p7fs4580cci6ai7o0m63klicvff1cl5l.apps.googleusercontent.com";

export default function Header(props) {

  const { isAuthenticated } = useAuth0();

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
          <BugReportIcon />
          <Typography variant="h6" component="div" sx={{ display: 'flex', mr: 2 }}>
            BugTracker
          </Typography>
          <ProjectSelector />
          <ViewButtons/>
          <Box sx={{flexGrow: 1}}/>
          {isAuthenticated && <Input onUpdatePosts={props.onUpdatePosts}/>}
          <AuthenticationButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}