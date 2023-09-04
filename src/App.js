import About from "./Rout/About";
import Contact from "./Rout/Contact";
import Home from "./Rout/Home";
import Services from "./Rout/Services";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
