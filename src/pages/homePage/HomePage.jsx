import Header from "../../components/header/Header";
import "./homepage.css";
import foodPlate from "../../assets/foodPlate.png";
import Button from "../../components/button/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";

function HomePage() {
  // const [textSearchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios pour effectuer la requête GET à votre API
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        // Mettre à jour l'état avec les données de la réponse
        const result = response.data;
        setCategory(result);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    // Appel de la fonction fetchData
    fetchData();
  }, []); // Le tableau vide assure que cela ne s'exécute qu'une fois lors du montage du composant

  //Triage alphabétique des catégories
  const sortedCategories = category.categories
    ? [...category.categories].sort((a, b) =>
        a.strCategory.localeCompare(b.strCategory)
      )
    : [];
  console.log(sortedCategories);
  return (
    <>
      <Header />
      <section className="  relative h-90dvh bg-right bg-no-repeat bg-contain bg-[url('../../../src/assets/bgShape.webp')]">
        <div className=" container h-full p-2 mx-auto grid grid-cols-2 place-items-center">
          <div className="  text-text space-y-8 ">
            <h1 className=" text-7xl font-cinzel font-semibold ">
              Réveiller le chef qui est en vous
            </h1>
            <p className="font-poppins">
              Trouvez des recettes délicieuses en fonction des ingrédients que
              vous avez à portée de main.
            </p>
            <Button>
              <p className=" tracking-wide font-semibold font-poppins">
                Rechercher votre recette
              </p>
            </Button>
          </div>
          <div className=" w-full">
            <img className="w-full " src={foodPlate} alt="" />
          </div>
        </div>

        <div className="wave ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className=" relative w-full bg-white text-uiHover ">
        <div className="  ">
          <div className="max-w-7xl mx-auto ">
            <div className="pt-12 text-center text-5xl mx-auto font-semibold">
              <p>Catégories</p>
            </div>

            <div className="w-full grid  mt-8 p-4 ">
              {sortedCategories.map((category) => (
            <Cards
            key={category.idCategory}
            id={category.idCategory}
            title={category.strCategory}
            imageUrl={category.strCategoryThumb}
            link={`/categories/${category.strCategory}`} // Exemple de lien vers une page de détails
          />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
