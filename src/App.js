import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

// PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import UserDetail from "./pages/ProductDetail/ProductDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;