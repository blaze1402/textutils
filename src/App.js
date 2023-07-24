import About from "./components/About";
import ContactPage from "./components/Contact";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" />
        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
