import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./App.css";
import AboutUs from "./pages/AboutUs";
import FallbackPage from "./pages/FallbackPage";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import RandomQuote from "./pages/RandomQuote";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-quote" element={<RandomQuote />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<FallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
