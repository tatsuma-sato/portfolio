import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Contact, About, Works, Home } from "./pages";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
