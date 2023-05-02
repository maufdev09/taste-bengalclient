import React from "react";
import { Link } from "react-router-dom";

const ShefsCarts = ({ chef }) => {
  console.log(chef);
  const { image, name, years_of_experience, recipes_count, likes, id } = chef;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto ">
        <figure>
          <img className="w-70" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Experiences: {years_of_experience}</p>
          <p>Recipes{recipes_count}</p>
          <p>Likes:{likes}</p>
          <div className="card-actions justify-end">
            <Link to={`/chef/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShefsCarts;
