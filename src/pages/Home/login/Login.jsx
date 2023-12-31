import React, { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [err, setErr] = useState("");
  const { signIn, loginGoogle, loginGitHub } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    signIn(email, password)
      .then((res) => {
        const loggedUser = res?.user;
        navigate(from, { replace: true });
      })
      .catch((error) => setErr(error.message));
  };

  const handlegoogleSignIn = () => {
    loginGoogle()
      .then((res) => {
        const loggeduser = res?.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  const handleGithubSignIn = () => {
    loginGitHub()
      .then((res) => {
        // const loggeduser = res?.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErr(error.message);
        console.error(error.message);
      });
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
        <h3 className="text-xl text-center my-8">Or</h3>
        <div className="flex justify-center space-x-4 -5">
          <button
            onClick={handlegoogleSignIn}
            className="py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2"
          >
            <FaGoogle></FaGoogle>Sign in with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2"
          >
            <FaGithub></FaGithub>Sign in with GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
