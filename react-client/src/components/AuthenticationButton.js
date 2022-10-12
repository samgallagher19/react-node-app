import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = (props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton location={props.location} /> : <LoginButton location={props.location} />;
};

export default AuthenticationButton;