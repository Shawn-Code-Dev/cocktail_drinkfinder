import React, { useContext, useEffect, useState } from "react";
import DrinkContext from "../context/drinkContext";

const FilterMenu = ({ letter, name, apiName }) => {
  const drinkContext = useContext(DrinkContext);
  const { selected, drinks } = drinkContext;

  const [disabled, setDisabled] = useState(false);
  const [option, setOption] = useState("");

  let altFilters;

  if (name === "ingredients") {
    altFilters = ["categories", "glasses", "alcholic"];
  } else if (name === "categories") {
    altFilters = ["ingredients", "glasses", "alcholic"];
  } else if (name === "glasses") {
    altFilters = ["categories", "ingredients", "alcholic"];
  } else {
    altFilters = ["ingredients", "categories", "glasses"];
  }

  useEffect(() => {
    drinkContext.getFilter(letter); // Need to add letter
  }, []); //eslint-disable-line

  useEffect(() => {
    if (
      ((drinks === undefined || drinks[0] === undefined) &&
        (selected[altFilters[0]] ||
          selected[altFilters[1]] ||
          selected[altFilters[2]])) ||
      drinks[0] === "404"
    ) {
      setDisabled(true);
    } else if (selected[name]) {
      setDisabled(true);
    } else {
      setDisabled(false);
      setOption("");
    }
  }, [drinks]); //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    drinkContext.getDrinksByFilter(letter, name, option); // Fixing
  };

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className='filter-container center'>
      <form onSubmit={handleSubmit} className='form'>
        <select
          onChange={handleChange}
          value={option}
          className='interactable'
          disabled={disabled}
        >
          <option defaultValue value='' className='test'>
            {`~~ ${name[0].toUpperCase() + name.slice(1)} ~~`}
          </option>
          {drinkContext[name].map((option) => (
            <option
              value={`${option[apiName]}`}
              key={`${option[apiName]}`}
            >{`${option[apiName]}`}</option>
          ))}
        </select>
        {!disabled && option !== "" && (
          <input type='submit' value='Search' className='btn' />
        )}
      </form>
    </div>
  );
};

export default FilterMenu;
