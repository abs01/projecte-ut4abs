import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projectes from './Projectes';
import Landing from './Landing';
import NewsLetter from './NewsLetter';
import Contact from './Contact';

export default function Header({ title }) {
  return (
    <>

      <BrowserRouter>
 <header>
        <h1>{title}</h1>
        <nav>

          
        <Link to="/">Pagina principal</Link> | 
        <Link to="/projectes">Projectes</Link> |
        <Link to="/news">News</Link> |
        <Link to="/contact">Contacte</Link>


   


       
        </nav>
      </header>
   <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/projectes" element={<Projectes />} />
          <Route path="/news" element={<NewsLetter />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

    </BrowserRouter>



      
           

    </>
  );
}
