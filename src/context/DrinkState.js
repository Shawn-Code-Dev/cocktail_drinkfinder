import React, { useReducer } from "react";
import axios from "axios";
import DrinkReducer from "./drinkReducer";
import DrinkContext from "./drinkContext";
import { drinkFilter } from "../helpers";
import {
  SEARCH_DRINKS,
  GET_DRINK,
  IS_LOADING,
  CLEAR,
  GET_DRINK_BY_F,
  GET_FILTER,
} from "./types";

const DrinkState = (props) => {
  const initialState = {
    drinks: [],
    drink: {},
    alcoholic: [],
    ingredients: [],
    categories: [],
    glasses: [],
    selected: {
      alcoholic: false,
      category: false,
      ingredient: false,
      glass: false,
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(DrinkReducer, initialState);

  const isLoading = () => dispatch({ type: IS_LOADING });

  const clearList = () => dispatch({ type: CLEAR });

  const searchDrinks = async (txt) => {
    isLoading();
    let payload;
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${txt}`
    );
    if (res.data.drinks == null) {
      payload = ["404"];
    } else {
      payload = res.data.drinks;
    }
    dispatch({ type: SEARCH_DRINKS, payload: payload });
  };

  const getDrink = async (id) => {
    isLoading();
    let payload;
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    if (res.data.drinks == null) {
      payload = "404";
    } else {
      payload = res.data.drinks[0];
    }
    dispatch({ type: GET_DRINK, payload: payload });
  };

  const getFilter = async (letter) => {
    isLoading();
    const filters = {
      a: "alcoholic",
      i: "ingredients",
      c: "categories",
      g: "glasses",
    };
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?${letter}=list`
    );
    dispatch({
      type: GET_FILTER,
      payload: { filterList: res.data.drinks, filterName: filters[letter] },
    });
  };
  const getDrinksByFilter = async (letter, name, filter) => {
    isLoading();
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${letter}=${filter}`
    );
    const drinkPayload = drinkFilter(res.data.drinks, state.drinks);
    dispatch({
      type: GET_DRINK_BY_F,
      payload: { drinks: drinkPayload, selected: name },
    });
  };

  return (
    <DrinkContext.Provider
      value={{
        drinks: state.drinks,
        drink: state.drink,
        alcoholic: state.alcoholic,
        ingredients: state.ingredients,
        categories: state.categories,
        glasses: state.glasses,
        selected: state.selected,
        loading: state.loading,
        searchDrinks,
        getDrink,
        getFilter,
        getDrinksByFilter,
        clearList,
      }}
    >
      {props.children}
    </DrinkContext.Provider>
  );
};

export default DrinkState;
