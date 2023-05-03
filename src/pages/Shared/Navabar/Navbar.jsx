import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "#570DF8" : "black",
    };
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case md:text-xl">
          Taste of Bengal
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-4 px-1 text-2xl">
          <li className="">
            <NavLink to={"/"} style={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user && <FaUserCircle className="text-4xl mx-3"></FaUserCircle>}
        {user ? (
          <button className="btn" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <Link className="btn" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
