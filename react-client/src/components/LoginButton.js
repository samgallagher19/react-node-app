import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  let color = "";
  let variant = "";
  if(props.location === "navbar") {
     color = "inherit";
     variant = "text";
  } else if (props.location === "card") {
    color = "primary";
    variant = "contained";
 }
  return (
    <Button color={color}
    variant={variant} onClick={() => loginWithRedirect()}>Login</Button>
  );
};

export default LoginButton;