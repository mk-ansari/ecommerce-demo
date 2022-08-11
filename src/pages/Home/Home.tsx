// CREATED BY: ANSARI KAMAL

import { useState } from "react";
import { Grid, TextField, InputAdornment, Stack, Select, NativeSelect, MenuItem, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {

  return (
    <Stack direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <TextField
        type="search"
        variant="outlined"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
      >
        <MenuItem value="neweset">Neweset</MenuItem>
        <MenuItem value="oldeset">Oldeset</MenuItem>
      </Select>

    </Stack>


    // <Grid
    //   container
    //   direction="row"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <TextField
    //     type="search"
    //     variant="outlined"
    //     margin="normal"
    //     InputProps={{
    //       startAdornment: (
    //         <InputAdornment position="start">
    //           <SearchIcon />
    //         </InputAdornment>
    //       )
    //     }}
    //   />

    //   <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
    //   <Select
    //     labelId="demo-simple-select-label"
    //     id="demo-simple-select"
    //     value={age}
    //     label="Age"
    //     onChange={handleChange}
    //   >
    //     <MenuItem value={10}>Ten</MenuItem>
    //     <MenuItem value={20}>Twenty</MenuItem>
    //     <MenuItem value={30}>Thirty</MenuItem>
    //   </Select>
    // </Grid>
  )
}

export default Home