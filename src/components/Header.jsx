import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../App";
export default function Header() {
      const location = useLocation();

  return (
    
    <>
      <header>
        <h1>{location.pathname != "/"? capitalizeFirstLetter(location.pathname.slice(1)): "Principal"}</h1>

        <Link to="/" className={location.pathname === "/" ? "activate" : ""}>
          Pagina principal
        </Link>{" "}
        |
        <Link to="/projectes" className={location.pathname === "/projectes" ? "activate" : ""}>
          Projectes
        </Link>{" "}
        |
        <Link to="/news" className={location.pathname === "/news" ? "activate" : ""}>
          News
        </Link>{" "}
        |
        <Link to="/contact" className={location.pathname === "/contact" ? "activate" : ""}>
          Contacte
        </Link>
      </header>
    </>
  );
}
