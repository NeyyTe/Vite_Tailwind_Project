import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="   h-16 flex border-b-4  text-text font-poppins text-xl">
        <nav className="w-full flex items-center justify-between ">
          <h1>GustoRecipes</h1>

          <ul className="flex gap-8 ">
            <li>
              <NavLink className="" to="/">
                Accueil
              </NavLink>
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
