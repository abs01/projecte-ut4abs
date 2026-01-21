import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export default function Header({ page, setPage }) {
  return (
    <>
      <header>
        <h1>
          {page === "/"
            ? "Principal"
            : page === "/projectes"
              ? "Projectes"
              : page === "/news"
                ? "News"
                : page === "/contact" && "Contacte"}
        </h1>




        <Link to="/" onClick={() => setPage("/")}>
          Pagina principal
        </Link>{" "}
        |
        <Link to="/projectes" onClick={() => setPage("/projectes")}>
          Projectes
        </Link>{" "}
        |
        <Link to="/news" onClick={() => setPage("/news")}>
          News
        </Link>{" "}
        |
        <Link to="/contact" onClick={() => setPage("/contact")}>
          Contacte
        </Link>
        <h1></h1>
        <nav></nav>
      </header>
    </>
  );
}
