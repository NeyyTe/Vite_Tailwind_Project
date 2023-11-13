import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";

export default function IngredientsPage() {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
      const response= await  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
        );
        const result = response.data;
        setSearchInput(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataSearch();
  }, [searchInput]);

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto ">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </>
  );
}
