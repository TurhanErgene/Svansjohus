import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
           <Route exact path="/about" element={<About />}/>
             {/*   <Route exact path="/" element={<Home />}/>
              */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
