import React from "react";
import Input from "./Input";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import Login from "./Login";
import { gapi } from "gapi-script";

const clientId = "942096996649-p7fs4580cci6ai7o0m63klicvff1cl5l.apps.googleusercontent.com";

export default function Header(props) {

  React.useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
  })

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sam Gallagher React + Node App
          </Typography>
          <Input onUpdatePosts={props.onUpdatePosts}/>
          <Button color="inherit">Login</Button>
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}