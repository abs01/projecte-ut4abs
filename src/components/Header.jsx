import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../App";
import { NavLink } from "react-router-dom";
export default function Header() {
      const location = useLocation();

  return (
    
    <>
      <header>
        {/* <h1>{location.pathname != "/" ? capitalizeFirstLetter(location.pathname.slice(1)): "Principal"}</h1> */}

        {/* <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Pagina principal
        </Link>{" "}
        |
        <Link to="/projectes" className={location.pathname === "/projectes" ? "active" : ""}>
          Projectes
        </Link>{" "}
        |
        <Link to="/news" className={location.pathname === "/news" ? "active" : ""}>
          News
        </Link>{" "}
        |
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          Contacte
        </Link>
         */}
        
        
        <NavLink to="/" className={({isActive})=>isActive?"active":""}>
          Pagina principal
        </NavLink>{" "}
        |
        <NavLink to="/projectes" className={({isActive})=>isActive?"active":""}>
          Projectes
        </NavLink>{" "}|
        <NavLink to="/news" className={({isActive})=>isActive?"active":""}>
          News  
        </NavLink>{" "}|
        <NavLink to="/contact" className={({isActive})=>isActive?"active":""}>
          Contacte
        </NavLink>

        


      </header>
    </>
  );
}
