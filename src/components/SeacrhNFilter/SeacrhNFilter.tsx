// CREATED BY: ANSARI KAMAL

import {
    Grid,
    FormControl,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SeacrhNFilter = () => {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ my: 2 }}
        >

            <Grid item xs={12} md={4} sx={{ background: "" }}>
                <FormControl fullWidth>
                    <TextField
                        type="search"
                        variant="outlined"
                        margin="normal"
                        placeholder="Search Product"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value="newest">Newest</MenuItem>
                        <MenuItem value="oldest">Oldest</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default SeacrhNFilter;