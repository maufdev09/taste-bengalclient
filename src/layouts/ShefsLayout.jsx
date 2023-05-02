import React from "react";
import { Outlet } from "react-router-dom";

const ShefsLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default ShefsLayout;
