import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import MenuShowcase from "./components/MenuShowcase";
import Menu from "./components/Menu1";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";
import Welovecoffee from "./components/Welovecoffee";
import Footer from "./components/Footer";
import News from "./components/News";

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <News />
                <MenuShowcase />
                <Menu />
                <Menu2 />
                <Menu3 />
                <ImageCarousel />
                <Welovecoffee />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
