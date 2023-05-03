import React, { useState } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShefRecipieCart = ({ recipe }) => {
  const HandleFvrtBtn = () => {
    setFvrtActive(!FvrtActive);
    toast.success("This recipe is in your favorite", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const [FvrtActive, setFvrtActive] = useState(false);

  const { ingredients, image, name, cooking_method, rating } = recipe;
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

        <div>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-yellow-300"></FaStar>}
            fullSymbol={<FaStar />}
          />
          <span>{rating}</span>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={HandleFvrtBtn}
            className={FvrtActive ? "hidden" : "btn btn-primary"}
          >
            <FaHeart />
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ShefRecipieCart;
