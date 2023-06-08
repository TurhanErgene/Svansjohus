import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Footer from "./pages/Components/Footer";
import Chatbot from './Chatbot';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
           <Route exact path="/Pricing" element={<Pricing />}/>
           <Route exact path="/about" element={<About />}/>

           <Route exact path="/gallery" element={<Gallery />}/>
           <Route exact path="/contact-us" element={<Contact />}/>

             {/*   <Route exact path="/" element={<Footer />}/>
              */}
        </Routes>
        <Chatbot />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
