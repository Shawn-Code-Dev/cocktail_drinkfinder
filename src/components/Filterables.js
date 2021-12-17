import React from "react";
import FilterMenu from "./FilterMenu";

const Filterables = () => {
  return (
    <>
      <FilterMenu letter='a' name='alcoholic' apiName='strAlcoholic' />
      <FilterMenu letter='c' name='categories' apiName='strCategory' />
      <FilterMenu letter='i' name='ingredients' apiName='strIngredient1' />
      <FilterMenu letter='g' name='glasses' apiName='strGlass' />
    </>
  );
};

export default Filterables;
