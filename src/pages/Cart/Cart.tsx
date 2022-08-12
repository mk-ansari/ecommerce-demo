// CREATED BY: ANSARI KAMAL

import { styled } from '@mui/material/styles';
import { Card, Grid, Paper, Typography, Button, ButtonBase, TextField, Container, Stack, Divider } from "@mui/material"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Cart = () => {
    return (
        <Container sx={{ minHeight: "75vh" }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ my: 5 }}
            >
                <Grid item xs={12} md={8}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                    >
                        <Grid item xs={12} >
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                sx={{ px: 2 }}
                            >
                                <Typography variant="h5" component="div" gutterBottom>
                                    Shopping Cart
                                </Typography>
                                <Typography variant="subtitle1" component="div" gutterBottom>
                                    Price
                                </Typography>
                            </Grid>
                            <Divider sx={{ my: 1 }} />
                        </Grid>

                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase sx={{ width: 128, height: 128 }}>
                                            <Img alt="complex" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1655824982-240624_36814_41.jpg" />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    Classic Shirt
                                                </Typography>
                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={2}
                                                >
                                                    <Typography variant="body2" color="text.secondary">
                                                        Qty:
                                                    </Typography>
                                                    <TextField style={{ width: 70, textAlign: "center" }} id="standard-basic" size="small" type="number" variant="outlined" />
                                                </Stack>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ cursor: 'pointer' }} variant="body2" color="error">
                                                    Remove
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" component="div">
                                                $19.00
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} >
                    <Card sx={{ background: "#E1E1E1", p: 2 }}>
                        <Typography variant="subtitle1" fontWeight='fontWeightMedium' component="div" gutterBottom>
                            Subtotal (8 items): $601
                        </Typography>
                        <Button variant="contained" fullWidth>Proceed to checkout</Button>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Cart
