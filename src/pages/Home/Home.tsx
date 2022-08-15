// CREATED BY: ANSARI KAMAL

import { Container } from "@mui/material";

import SeacrhNFilter from "../../components/SeacrhNFilter/SeacrhNFilter";
import ProductsList from "../../components/Products/ProductsList";

const Home = () => {
	return (
		<Container sx={{ minHeight: "79.3vh" }}>
			<SeacrhNFilter />
			<ProductsList />
		</Container>
	);
};

export default Home;
