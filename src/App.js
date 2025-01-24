import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import About from "./components/About/About";
import Copyright from "./components/Copyright/Copyright";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Whatwedo from "./components/Whatwedo/Whatwedo";

function App() {
  const [preload, setPreload] = useState(true);

  setTimeout(function () {
    setPreload(false);
  }, 2000);

  if (preload) {
    return (
      <>
        <div className="preload">
          <h1>
            <strong>SOCH - Society of Children Happiness</strong>
          </h1>
          <p className="mt-3">───────────────</p>
          <Spinner animation="grow" />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/soch" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/whatwedo" element={<Whatwedo />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
