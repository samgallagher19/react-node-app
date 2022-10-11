import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link, BrowserRouter } from "react-router-dom";

export default function ViewButtons() {
  return (
    
    <ButtonGroup variant="contained" aria-label="outlined primary button group" color="info">
    <Link to="/kanbanView"><Button>Kanban</Button></Link>
    <Link to="/listView"><Button>List</Button></Link>
</ButtonGroup>
  );
}
