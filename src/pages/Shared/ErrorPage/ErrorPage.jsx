import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-500 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-lg text-gray-500 mb-4">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-primary">
        Go to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
