// import Header from "../../components/header/Header";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function DetailsPage() {
//   const [mealDetails, setMealDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchMealDetails = async () => {
//       try {
//         axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//           .then((values) => {
//             setMealDetails(values.data);
//             setLoading(false);
//         console.log(values.data)
//           });
//       } catch (e) {
//         console.error("ERREUR OMFG ", e);
//       }
//     };
//     fetchMealDetails();
//   }, [id,setMealDetails]);

//   // if (!loading) {
//   //   return <div>Loading...</div>;
//   // } else {
//   //   return (
//   //     <>
//   //       <Header />

//   //       <div className="text-text">

//   //           <div key={mealDetails.idMeal}>
//   //             <h1>{mealDetails.strMeal}</h1>
//   //             <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
//   //             <p>{mealDetails.strInstructions}</p>
//   //           </div>

//   //       </div>
//   //     </>
//   //   );
//   // }
//   if (!loading) {
//     return <div className="text-text">Loading...</div>;
//   } else {
//     return (
//       <>
//         <Header />
//         <div className="text-text">
//           {mealDetails.meals ? (
//             mealDetails.meals.map((meal) => (
//               <div key={meal.idMeal}>
//                 <h1>{meal.strMeal}</h1>
//                 <img src={meal.strMealThumb} alt={meal.strMeal} />
//                 <p>{meal.strInstructions}</p>
//               </div>
//             ))
//           ) : (
//             <div>Les détails du repas ne sont pas disponibles.</div>
//           )}
//         </div>
//       </>
//     );
//   }

// }

// import Header from "../../components/header/Header";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function DetailsPage() {
//   const [mealDetails, setMealDetails] = useState({});
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchMealDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//         );
//         setMealDetails(response.data);
//         setLoading(false);
//         console.log(response.data);
//       } catch (e) {
//         console.error("ERREUR OMFG ", e);
//       }
//     };
//     fetchMealDetails();
//   }, [id]);

//   return (
//     <>
//       <Header />

//       <div className="text-text max-w-7xl mx-auto">
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <div
//             className="grid grid-cols-2 gap-4 p-12"
//             key={mealDetails.meals[0].idMeal}
//           >
//             <div>
//               <img
//                 className="rounded"
//                 src={mealDetails.meals[0].strMealThumb}
//                 alt={mealDetails.meals[0].strMeal}
//               />
//             </div>
//             <div>
//               <h1 className="text-5xl pb-6">{mealDetails.meals[0].strMeal}</h1>
//               <p>{mealDetails.meals[0].strArea}</p>
//               <p>{mealDetails.meals[0].strInstructions}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

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
          <div>Loading...</div>
        ) : (
          <div className='max-w-7xl mx-auto'key={mealDetails.idMeal}>
            <div className="grid grid-cols-2 gap-4 p-12">
              <div>
                <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl ">{mealDetails.strMeal}</h1>
                <p>{mealDetails.strInstructions}</p>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${mealDetails.strYoutube.split("v=")[1]}`}
                  title={mealDetails.strMeal}
              
                  allowFullScreen
                ></iframe>
             
              </div>
              
            </div>

          </div>
        )}
      </div>
    </>
  );
}
