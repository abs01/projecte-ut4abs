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
import NotFound from "./components/NotFound";

  export function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

function App() {
  return (
    <>

      <Header  />   
         <Routes>
          <Route path="/" element={<Landing title={"Principal"} />} />
          <Route path="/projectes" element={<Projectes title={"Projectes"} />} />
          <Route path="/news" element={<NewsLetter title={"Newsletter"} />} />
          <Route path="/contact" element={<Contact title={"Contacto"} />} />
          <Route path="*" element={<NotFound title={"404"}/>}/>
        </Routes>
    </>
  );
}

export default App;
