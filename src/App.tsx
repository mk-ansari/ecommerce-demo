// CREATED BY: ANSARI KAMAL

import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import Header from "./pages/Layouts/Header/Header";
import Footer from "./pages/Layouts/Footer/Footer";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Header/>
      {element}
      <Footer/>
    </>
  );
}

export default App;