import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme } from '@mui/material/styles';

export default function ProjectSelector() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mr: 2 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, color: "secondary" }} size="small">
      
      <Select
        displayEmpty
        id="demo-select-small-standard"
          value={age}
          label="Age"
          onChange={handleChange}
        >
        <MenuItem disabled value="">
            <em>Select Project</em>
          </MenuItem>
          <MenuItem value={10}>Project 1</MenuItem>
          <MenuItem value={20}>Project 2</MenuItem>
          <MenuItem value={30}>Project 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
