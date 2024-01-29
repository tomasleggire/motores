import { useRoutes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <div className="pito"></div>
    </BrowserRouter>
  );
}

export default App;
