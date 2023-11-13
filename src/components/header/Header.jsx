import { NavLink } from "react-router-dom";
// import bgShape from "../../assets/bgShape.webp";
import Button from "../button/Button";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <header className="z-10 shadow-lg shadow-primary z-99  bg-background top-0 sticky h-10dvh flex text-text text-md  font-poppins tracking-wider">
        <nav className="container mx-auto  p-4 flex items-center justify-between ">
          <h1 className="w-36">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </h1>
          <ul className="flex gap-8 items-center">
            <li>
              <NavLink className="" to="/">
                Accueil
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/recettes">Recettes</NavLink>
            </li> */}
            <li>
              <NavLink to="/details">Détails</NavLink>
            </li>
            <li>
              <NavLink to="/ingredients">
              <Button>
                <p className="font-semibold tracking-wider">Ingrédients</p>
              </Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
