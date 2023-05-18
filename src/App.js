import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

import Footer from "./pages/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
           <Route exact path="/about" element={<About />}/>
           <Route exact path="/gallery" element={<Gallery />}/>

             {/*   <Route exact path="/" element={<Footer />}/>
              */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
