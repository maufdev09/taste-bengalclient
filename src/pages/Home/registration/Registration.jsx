import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const navigate = useNavigate();

  // .............................////.

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErr("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      setErr("Password must be at least 6 characters long");
      return;
    }

    setErr("");

    createUser(email, password, name, photoUrl)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate("/");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  return (
    <div className="bg-slate-200 w-3/4 mx-auto my-16 py-20">
      <h2 className="text-center text-3xl font-bold pb-5">Please Register</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto ">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="photoUrl"
          >
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photoUrl"
            type="url"
            value={photoUrl}
            onChange={(event) => setPhotoUrl(event.target.value)}
            placeholder="https://example.com/photo.jpg"
          />
        </div>
        <p className="pb-5">
          Already Have an Account?{" "}
          <Link className="link text-indigo-500" to="/login">
            {" "}
            Login{" "}
          </Link>{" "}
        </p>
        <p className="text-red-500 ">{err}</p>
        <div className="flex items-center justify-between">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
