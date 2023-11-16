import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsPage() {
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((values) => {
            setMealDetails(values.data.meals);
            setLoading(false);
        console.log(values.data.meals)
          });
      } catch (e) {
        console.error("ERREUR OMFG ", e);
      }
    };
    fetchMealDetails();
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header />

        <div className="text-text">
         
            <div key={mealDetails.idMeal}>
              <h1>{mealDetails.strMeal}</h1>
              <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
              <p>{mealDetails.strInstructions}</p>
            </div>
          
        </div>
      </>
    );
  }
}
