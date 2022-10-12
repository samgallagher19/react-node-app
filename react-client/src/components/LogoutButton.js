import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LogoutButton = (props) => {
  const { logout } = useAuth0();
  let color = "";
  let variant = "";
  if(props.location === "navbar") {
     color = "inherit";
     variant = "text";
  } else if (props.location === "card") {
     color = "inherit";
     variant = "contained";
  }
  return (
    <Button
      color={color}
      variant={variant}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Logout
    </Button>
  );
};

export default LogoutButton;