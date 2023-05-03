import React from "react";

import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navabar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
