import { Box, Grid, Typography } from "@mui/material"

const Cart = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8} sx={{background:"#d3d3d3"}}>
                    <Box >
                    <Typography variant="h4">
                        Shopping Cart
                    </Typography>
                    <Typography variant="h6">
                        Price
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{background:"red"}}>
                    xs=4
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart