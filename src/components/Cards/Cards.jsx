/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./cards.css";
export default function Cards({ id, title, imageUrl, link }) {
  return (
    <Link className="cardsCategory" to={link}>
      <div key={id} className="w-full flex flex-col grow shadow-xl product ">
        <div className="bg-background rounded-t-lg  ">
          <img className="w-full rounded-t-lg" src={imageUrl} alt={title} />
        </div>
        <div className="rounded-b-lg text-text p-4 bg-uiNormal">
          <p>{title}</p>
        </div>
       
      </div>
    </Link>
  );
}
