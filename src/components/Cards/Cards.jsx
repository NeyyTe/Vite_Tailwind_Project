import { Link } from "react-router-dom";


export default function Cards( category ) {
    return (
        <Link>
      <div key={category.idCategory} className="w-full flex flex-col shadow-xl ">
        <div className="  bg-background flex justify-center grow rounded-t-lg ">
          <img className="w-full "src={category.strCategoryThumb} alt="" />
        </div>
        <div className=" rounded-b-lg text-text p-4 bg-uiNormal">
     <p>{category.strCategory}</p>
        </div>
      </div>
      </Link>
    );
  }
