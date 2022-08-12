// CREATED BY: ANSARI KAMAL

import {
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Rating,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom"

const ProductDetails = () => {
  return (
    <Container sx={{ minHeight: "79vh" }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        sx={{ my: 2 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="../assets/images/product1.jpg"
            alt="product1"
            height={400}
            width="auto"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cotton Fit Shirt
            </Typography>
            <Rating name="read-only" value={2} readOnly />
            <Typography variant="subtitle2" color="text.secondary">
              ( 10 Customer Reviews )
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: $60
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: Nice Shirt
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ background: "#E1E1E1", p: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="fontWeightMedium"
              component="div"
              gutterBottom
            >
              Price: $60
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="fontWeightMedium"
              component="div"
              gutterBottom
            >
              Status: Instock
            </Typography>
            <Grid container direction="row" alignItems="center">
              <Typography variant="subtitle1" fontWeight="fontWeightMedium">
                Qty:
              </Typography>
              <TextField
                style={{ width: 70, marginLeft: "5px", textAlign: "center" }}
                id="standard-basic"
                size="small"
                type="number"
                variant="outlined"
              />
            </Grid>
            <Button component={Link} to="/cart" variant="contained" fullWidth sx={{ mt: 3 }}>
              Add to Cart
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
