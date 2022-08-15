import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./components/Products/ProductDetails";
import CreateProduct from "./pages/Product/CreateProduct";
import Shipping from "./components/Shipping/Shipping";

export const routes = [
	
	{ path: "/", element: <Home /> },
	{ path: "/signin", element: <SignIn /> },
	{ path: "/signup", element: <SignUp /> },
	{ path: "/product/:id", element: <ProductDetails /> },
	{ path: "/product/create", element: <CreateProduct /> },
	{ path: "/cart", element: <Cart /> },
	{ path: "/shipping", element: <Shipping /> },
];
