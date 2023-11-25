import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsPage() {
  const [mealDetails, setMealDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const { meals } = response.data;

        if (meals && meals.length > 0) {
          setMealDetails(meals[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [id]);

  return (
    <>
      <Header />
      <div className="text-text">
        {loading ? (
          <div>Chargement...</div>
        ) : (
          <div className="max-w-7xl mx-auto " key={mealDetails.idMeal}>
            <div className="grid grid-cols-2 gap-4 p-12">
              <div>
                <img
                  className="rounded-md"
                  src={mealDetails.strMealThumb}
                  alt={mealDetails.strMeal}
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{mealDetails.strMeal}</h1>
                <p>{mealDetails.strInstructions}</p>

                <div className="space-y-4 bg-uiNormal rounded p-4">
                  <h3 className="text-2xl font-semibold">Ingredients</h3>
                  <hr className="text-border " />
                  <div className="grid grid-cols-2 ">
                    <div>
                      <p>{mealDetails.strIngredient1}</p>
                      <p>{mealDetails.strIngredient2}</p>
                      <p>{mealDetails.strIngredient3}</p>
                      <p>{mealDetails.strIngredient4}</p>
                      <p>{mealDetails.strIngredient5}</p>
                      <p>{mealDetails.strIngredient6}</p>
                      <p>{mealDetails.strIngredient7}</p>
                      <p>{mealDetails.strIngredient8}</p>
                      <p>{mealDetails.strIngredient9}</p>
                      <p>{mealDetails.strIngredient10}</p>
                    </div>
                    <div>
                      <p>{mealDetails.strIngredient11}</p>
                      <p>{mealDetails.strIngredient12}</p>
                      <p>{mealDetails.strIngredient13}</p>
                      <p>{mealDetails.strIngredient14}</p>
                      <p>{mealDetails.strIngredient15}</p>
                      <p>{mealDetails.strIngredient16}</p>
                      <p>{mealDetails.strIngredient17}</p>
                      <p>{mealDetails.strIngredient18}</p>
                      <p>{mealDetails.strIngredient19}</p>
                      <p>{mealDetails.strIngredient20}</p>
                    </div>
                  </div>
                </div>
                {/* <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${mealDetails.strYoutube.split("v=")[1]}`}
                  title={mealDetails.strMeal}
              
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
}
