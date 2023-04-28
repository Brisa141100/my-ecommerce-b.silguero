import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";



// PAGES
import Zapatos from "./pages/Zapatos/Zapatos";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ZapatosDetail from "./pages/ProductDetail/ZapatosDetail";
import SpringseasonDetail from "./pages/ProductDetail/SpringSeasonDetail";
import CarterasDetail from "./pages/ProductDetail/CarterasDetail";
import AccesoriosDetail from "./pages/ProductDetail/AccesoriosDetail";
import Contact from "./pages/Contact/Contact";
import SpringSeason from "./pages/Springseason/Springseason"
import Accesorios from "./pages/Accesorios/Accesorios"
import Carteras from "./pages/Carteras/Carteras"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/zapatos-detail/:id" element={<ZapatosDetail />} />
          <Route path="/springseason-detail/:id" element={<SpringseasonDetail />} />
          <Route path="/accesorios-detail/:id" element={<AccesoriosDetail />} />
          <Route path="/carteras-detail/:id" element={<CarterasDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Zapatos" element={<Zapatos />} />
          <Route path="/Accesorios" element={<Accesorios />} />
          <Route path="/Springseason" element={<SpringSeason/>} />
          <Route path="/Carteras" element={<Carteras />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;