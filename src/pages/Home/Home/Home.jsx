import React from "react";
import { useLoaderData } from "react-router-dom";
import ShefsCarts from "./ShefsCarts";
import Header from "../../Shared/Header/Header";
import HappyCustomer from "./HappyCustomer";
import RestaurantFAQ from "./RestaurantFAQ";

const Home = () => {
  const chefsdata = useLoaderData();
  const chefs = chefsdata.chefs;
  return (
    <div>
      <Header></Header>
      {/* shefs section  */}
      <h3 className="text-center text-3xl font-bold my-9">
        Our {chefs.length} Master Chefs
      </h3>

      <div className="grid md:grid-cols-3 gap-6 container mx-auto my-6 ">
        {chefs.map((chef) => (
          <ShefsCarts key={chef.id} chef={chef}></ShefsCarts>
        ))}
      </div>
      <div className="container mx-auto">
        <HappyCustomer></HappyCustomer>
      </div>
      <div className="">
        <RestaurantFAQ></RestaurantFAQ>
      </div>
    </div>
  );
};

export default Home;
