import React from "react";
import DrinkList from "../drink/DrinkList";
import Search from "../Search";
import ClearButton from "../ClearButton";

import Filterables from "../Filterables";

const Home = () => {
  return (
    <div>
      <Search />
      <Filterables />
      <ClearButton />
      <DrinkList />
    </div>
  );
};

export default Home;
