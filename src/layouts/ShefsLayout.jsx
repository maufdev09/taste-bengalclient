import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navabar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const ShefsLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ShefsLayout;
