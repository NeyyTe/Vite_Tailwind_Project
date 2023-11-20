import "./ingredientsPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/header/Header";

export default function IngredientsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        axios
          .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
          )
          .then((values) => {
            setSearchResults(values.data.meals); 
          });
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

        <div className=" gridSearchResults py-6">
          {searchResults.map((result) => (
            <Cards
              key={result.idMeal}
              id={result.idMeal}
              title={result.strMeal}
              imageUrl={result.strMealThumb}
              link={`/details/${result.idMeal}`}
       
            />
          ))}
        </div>
      </div>
    </>
  );
}
