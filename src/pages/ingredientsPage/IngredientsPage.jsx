// import Header from "../../components/header/Header";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "../../components/searchBar/SearchBar";
// import Cards from "../../components/Cards/Cards";

// export default function IngredientsPage() {
//   const [searchInput, setSearchInput] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const fetchDataSearch = async () => {
//       try {
//         axios
//           .get(
//             `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
//           )
//           .then((value) => {
//             setSearchResults(value.data);
//           });
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDataSearch();
//   }, [searchInput]);

//   return (
//     <>
//       <Header />

//       <div className="max-w-7xl mx-auto ">
//         <SearchBar
//           placeholder="Entrer un repas"
//           searchInput={searchInput}
//           setSearchInput={setSearchInput}
//         />

//         <div className="grid grid-cols-5  gap-4"></div>
//       </div>
//     </>
//   );
// }


import Header from "../../components/header/Header";
import './ingredientsPage.css'
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";

export default function IngredientsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
        );
        setSearchResults(response.data.meals || []); // Vérifiez si meals est présent dans la réponse
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataSearch();
  }, [searchInput]);

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto">
        <SearchBar
          placeholder="Entrer un repas"
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />

        <div className="grid gridSearchResults p-6">
        {searchResults.map((result) => (
  <Cards
    key={result.idMeal}
    id={result.idMeal}
    title={result.strMeal}
    imageUrl={result.strMealThumb}
    link={`/meals/${result.idMeal}`} // Exemple de lien vers une page de détails
  />
))}

        </div>
      </div>
    </>
  );
}
