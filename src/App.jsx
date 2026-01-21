import "./App.css";
import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projectes from "./components/Projectes";
import NewsLetter from "./components/NewsLetter";
import Contact from "./components/Contact";
import {
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";


function App() {
  return (
    <>

      <Header  />   
         <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/projectes" element={<Projectes />} />
          <Route path="/news" element={<NewsLetter />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
    </>
  );
}

export default App;
