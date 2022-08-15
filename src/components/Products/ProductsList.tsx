// CREATED BY: ANSARI KAMAL
import { useState, useEffect } from "react";
import {
	Grid,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

import { getProducts } from "../../Services/api";


const ProductsList = () => {
	const [products, setProducts] = useState<any>([]);

	useEffect(() => {
		fetchProducts();
	}, [])

	const fetchProducts = async () => {
		const res = await getProducts();
		setProducts(res?.data);
	}

	return (
		<Grid
			container
			spacing={2}
			direction="row"
			justifyContent="center"
			sx={{ my: 2 }}
		>
			{
				products.map((product: any) => {
					return (
						<Grid item xs={12} sm={6} md={4} key={product._id}>
							<Card component={Link} to={`/product/${product._id}`} sx={{ textDecoration: "none" }}>
								<CardMedia
									component="img"
									height="250"
									width="250"
									image={product.image}
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{product.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{product.brand}
									</Typography>
									<Typography variant="h6" color="text.secondary">
										{product.price}
									</Typography>
									<Rating name="read-only" value={product.rating} precision={0.5} readOnly />
									<Typography variant="subtitle2" color="text.secondary">
										( {product.numReviews} Reviews )
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					)
				})
			}
		</Grid>
	);
};

export default ProductsList;
