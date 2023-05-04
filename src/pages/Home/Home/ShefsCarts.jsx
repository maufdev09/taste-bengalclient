import React from "react";
import { Link } from "react-router-dom";

const ShefsCarts = ({ chef }) => {
  const { image, name, years_of_experience, recipes_count, likes, id } = chef;
  return (
    <div className="mx-2">
      <div className="card w-90 bg-base-100 shadow-xl mx-auto  ">
        <figure className="w-fit">
          <img className="" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Experiences: {years_of_experience}</p>
          <p>Recipes{recipes_count}</p>
          <p>Likes:{likes}</p>
          <div className="card-actions -ms-2 md:justify-end">
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
