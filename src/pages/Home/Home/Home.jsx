import React from "react";
import { useLoaderData } from "react-router-dom";
import ShefsCarts from "./ShefsCarts";

const Home = () => {
  const chefsdata = useLoaderData();
  const chefs = chefsdata.chefs;
  return (
    <div>
      {/* shefs section  */}
      <h3 className="text-center text-3xl font-bold my-9">
        Our {chefs.length} Master Chefs
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {chefs.map((chef) => (
          <ShefsCarts key={chef.id} chef={chef}></ShefsCarts>
        ))}
      </div>
    </div>
  );
};

export default Home;
