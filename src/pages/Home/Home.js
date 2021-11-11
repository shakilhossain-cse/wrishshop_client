import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Reviews />
      <Categories />
    </div>
  );
};

export default Home;
