// CREATED BY: ANSARI KAMAL

import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      sx={{ my: 2 }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card component={Link} to="/product/1" sx={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="250"
            image="assets/images/product1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cotton Fit Shirt
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lacoste
            </Typography>
            <Typography variant="h6" color="text.secondary">
              $60
            </Typography>
            <Rating name="read-only" value={2} readOnly />
            <Typography variant="subtitle2" color="text.secondary">
              ( 10 Reviews )
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card component={Link} to="/product/2" sx={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="250"
            image="assets/images/product1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cotton Fit Shirt
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lacoste
            </Typography>
            <Typography variant="h6" color="text.secondary">
              $60
            </Typography>
            <Rating name="read-only" value={2} readOnly />
            <Typography variant="subtitle2" color="text.secondary">
              ( 10 Reviews )
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card component={Link} to="/product/3" sx={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="250"
            image="assets/images/product1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cotton Fit Shirt
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lacoste
            </Typography>
            <Typography variant="h6" color="text.secondary">
              $60
            </Typography>
            <Rating name="read-only" value={2} readOnly />
            <Typography variant="subtitle2" color="text.secondary">
              ( 10 Reviews )
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Products;
