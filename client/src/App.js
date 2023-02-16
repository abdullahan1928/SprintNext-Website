import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Hiring from "./routes/Hiring/Hiring";
import About from "./routes/About/About";
import Portfolio from "./routes/Portfolio/Portfolio";
import Services from "./routes/Services/Services";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hire-us" element={<Hiring />} />
      </Route>
    </Routes>
  );
}

export default App;
