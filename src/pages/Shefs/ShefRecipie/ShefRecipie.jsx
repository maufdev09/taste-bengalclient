import React from "react";
import { useLoaderData } from "react-router-dom";

const ShefRecipie = () => {
  const recipe = useLoaderData();
  const { image, bio, likes, recipes_count, years_of_experience, name } =
    recipe;
  console.log(recipe);
  return (
    // Hero section

    <div>
      <div className="hero min-h-screen bg-base-200 px-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl w-52 " />
          <div>
            <h1 className="text-5xl font-bold pb-4">{name}</h1>
            <p className="pt-2">{bio}</p>
            <div className="flex gap-3 pb-5 pt-2">
              <p className="">
                {" "}
                <span className="font-bold">Likes: </span>
                {likes}
              </p>
              <p className="">
                <span className="font-bold">Recipies: </span>
                {recipes_count}
              </p>
              <p className="">
                {" "}
                <span className="font-bold">Experience: </span>
                {years_of_experience}
              </p>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShefRecipie;
