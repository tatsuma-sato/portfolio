import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Contact, About, Works, Home } from "./pages";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
