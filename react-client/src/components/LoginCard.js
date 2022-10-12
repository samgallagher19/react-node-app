import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BugReportIcon from '@mui/icons-material/BugReport';
import Container from '@mui/material/Container';
import LoginButton from "./LoginButton";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Container maxWidth="sm" sx={{mt: 2}}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome to
        </Typography>
        <BugReportIcon />
        <Typography variant="h6" component="div" sx={{ display: 'flex', mr: 2 }}>
            BugTracker
        </Typography>
        <Typography variant="body2">
          an application to track your bugs
        </Typography>
      </CardContent>
      <CardActions>
        <LoginButton location="card" />
      </CardActions>
    </Card>
    </Container>
  );
}
