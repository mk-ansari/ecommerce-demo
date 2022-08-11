import Home from "./pages/Home/Home"
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Cart from "./pages/Cart/Cart";

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/cart", element: <Cart /> },
]