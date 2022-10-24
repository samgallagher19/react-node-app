import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";

export default function ViewButtons() {
  return (
    
    <ButtonGroup variant="contained" aria-label="outlined primary button group" color="info">
    <Link to="/kanbanView" style={{textDecoration: 'none' }}><Button>Kanban</Button></Link>
    <Link to="/listView" style={{textDecoration: 'none' }}><Button>List</Button></Link>
</ButtonGroup>
  );
}
