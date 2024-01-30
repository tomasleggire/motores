import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;

// const AppRoutes = () => {
//   const routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/about", element: <About /> },
//     { path: "/contact", element: <Contact /> },
//     { path: "/*", element: <NotFound /> },
//   ]);
//   return routes;
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <AppRoutes />
//       <div className="pito"></div>
//     </BrowserRouter>
//   );
// }
