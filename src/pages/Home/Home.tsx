// CREATED BY: ANSARI KAMAL

import { Container } from "@mui/material";

import SeacrhNFilter from "../../components/SeacrhNFilter/SeacrhNFilter";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <Container sx={{ minHeight: "79vh" }}>
      <SeacrhNFilter/>
      <Products />
    </Container>
  );
};

export default Home;
