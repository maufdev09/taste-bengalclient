import React, { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [err, setErr] = useState("");
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    signIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => setErr(error.message));
  };
  return (
    <div className="bg-slate-200 w-3/4 mx-auto my-16 py-20">
      <h2 className="text-center text-3xl font-bold pb-5">Please Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto ">
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
        <p className="pb-5">
          Don't Have an Account?{" "}
          <Link className="link text-indigo-500" to="/registration">
            {" "}
            Register{" "}
          </Link>{" "}
        </p>
        <p className="text-red-500 ">{err}</p>
        <div className="flex items-center justify-between">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
