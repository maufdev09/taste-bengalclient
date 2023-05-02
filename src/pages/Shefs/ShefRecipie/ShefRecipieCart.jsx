import React from "react";

const ShefRecipieCart = ({ recipe }) => {
  const { ingredients, image, name, cooking_method } = recipe;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-10 ps-6">
      <figure>
        <img className="w-60 " src={image} alt="Album" />
      </figure>
      <div className="card-body w-8/12">
        <h2 className="card-title">{name}</h2>
        <p className="">{cooking_method}</p>

        <h3 className="font-semibold text-xl">Ingredient :</h3>
        {ingredients.map((ingredient, n) => (
          <li className="list-item" key={n}>
            {ingredient}
          </li>
        ))}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ShefRecipieCart;
