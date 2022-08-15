// CREATED BY: ANSARI KAMAL
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Header from "./pages/Layouts/Header/Header";
import Footer from "./pages/Layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./components/Products/ProductDetails";
import CreateProduct from "./pages/Product/CreateProduct";
import Shipping from "./components/Shipping/Shipping";
import PageNotFound from "./pages/404/PageNotFound";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/shipping" element={<Shipping />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

