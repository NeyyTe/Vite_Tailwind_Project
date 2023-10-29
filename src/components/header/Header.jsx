import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="container mx-auto px-12 h-16 flex items-center justify-end ">
        <nav className="">
          <ul className="flex gap-8 ">
            <li>
              <NavLink className=""to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="">Recettes</NavLink>
            </li>
            <li>
              <NavLink to=""></NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
