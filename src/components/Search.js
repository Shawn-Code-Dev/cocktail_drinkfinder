import React, { useContext, useState } from "react";
import DrinkContext from "../context/drinkContext";

const Search = () => {
  const drinkContext = useContext(DrinkContext);

  const [text, setText] = useState("");

  const handleSearch = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    drinkContext.searchDrinks(text);
    setText("");
  };

  return (
    <div className='filter-container center'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Find a drink...'
          value={text}
          onChange={handleSearch}
          className='interactable'
        />
        {text !== "" && <input type='submit' value='Search' className='btn' />}
      </form>
    </div>
  );
};

export default Search;
