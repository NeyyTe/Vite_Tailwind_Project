/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";


// export default function Cards( category) {
//     return (
//         <Link>
//       <div key={category.idCategory} className="w-full flex flex-col shadow-xl ">
//         <div className="  bg-background flex justify-center grow rounded-t-lg ">
//           <img className="w-full "src={category.strCategoryThumb} alt="" />
//         </div>
//         <div className=" rounded-b-lg text-text p-4 bg-uiNormal">
//      <p>{category.strCategory}</p>
    
//         </div>
//       </div>
//       </Link>
//     );
//   }


import { Link } from "react-router-dom";
import "./cards.css"
export default function Cards({ id, title, imageUrl, link }) {
  return (
    <Link className="cardsCategory"to={link}>
      <div key={id} className="w-full flex flex-col grow shadow-xl">
        <div className="bg-background rounded-t-lg">
          <img className="w-full rounded-t-lg" src={imageUrl} alt={title} />
        </div>
        <div className="rounded-b-lg text-text p-4 bg-uiNormal">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}
