// CREATED BY: ANSARI KAMAL

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
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
import { Link, useParams } from "react-router-dom";

import { getProduct } from "../../Services/api";

const ProductDetails = () => {
	const { id } = useParams() as { id: string };

	const [product, setProduct] = useState<any>([]);
	// const [cartCount, setCartCount] = useState<number>(1);

	const dispatch = useDispatch();


	useEffect(() => {
		fetchProduct();
	}, [])

	const fetchProduct = async () => {
		const res = await getProduct(id);
		setProduct(res?.data);
	}

	// const itemCount = (e: Event) => {
	// 	setCartCount(e.taget.value);
	// }

	return (
		<Container sx={{ minHeight: "79.3vh" }}>

			<Grid
				container
				spacing={2}
				direction="row"
				justifyContent="center"
				sx={{ my: 2 }}
			>
				<Grid item xs={12} sm={6} md={4}>
					<img
						src={product.image}
						alt="product1"
						height={400}
						width="auto"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{product.name}
						</Typography>
						<Rating name="read-only" value={product.rating ?? 0} precision={0.5} readOnly />
						<Typography variant="subtitle2" color="text.secondary">
							( {product.numReviews} Customer Reviews )
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Price: {product.price}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Description: {product.description}
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
							Price: {product.price}
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight="fontWeightMedium"
							component="div"
							gutterBottom
						>
							Status: {product.countInStock > 0 ? "Instock" : "Out of stock"}
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
								// onChange={itemCount}
								defaultValue={1}
								InputProps={{ inputProps: { min: 1, max: 5 } }}
								variant="outlined"
							/>
						</Grid>
						<Button
							// component={Link}
							// to="/cart"
							variant="contained"
							fullWidth
							sx={{ mt: 3 }}
							// onClick={() => dispatch({ type: "INCREMENT_BY_VALUE", payload: cartCount })}
						>
							Add to Cart
						</Button>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductDetails;
