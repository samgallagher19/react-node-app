import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <Container>
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={handleChange}
    >
      <Link to="/listView">    
      <ToggleButton value="list" aria-label="list">
      <ViewListIcon />
      </ToggleButton>
      </Link>
      <Link to="/kanbanView">
      <ToggleButton value="board" aria-label="board">
        <ViewModuleIcon />
      </ToggleButton>
      </Link>
    </ToggleButtonGroup>
    </Container>
  );
}