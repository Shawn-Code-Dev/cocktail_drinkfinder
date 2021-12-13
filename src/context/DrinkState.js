import React, { useReducer } from 'react'
import axios from 'axios'
import DrinkReducer from './drinkReducer'
import DrinkContext from './drinkContext'
import {
  SEARCH_DRINKS,
  GET_DRINK,
  GET_INGREDIENTS,
  GET_CATEGORIES,
  IS_LOADING,
  GET_DRINK_BY_I,
  GET_DRINK_BY_C
} from './types'

const DrinkState = props => {
  const initialState = {
    drinks: [],
    drink: {},
    ingredients: [],
    categories: [],
    loading: false
  }

  const [state, dispatch] = useReducer(DrinkReducer, initialState)

  const isLoading = () => dispatch({ type: IS_LOADING})

  const searchDrinks = async txt => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${txt}`)
    dispatch({ type: SEARCH_DRINKS, payload: res.data.drinks })
  }

  const getDrink = async (id) => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    dispatch({ type: GET_DRINK, payload: res.data.drinks[0] })
  }

  const getIngredients = async () => {
    isLoading()
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    dispatch({ type: GET_INGREDIENTS, payload: res.data.drinks })
  }

  const getCategories = async () => {
    isLoading()
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    dispatch({ type: GET_CATEGORIES, payload: res.data.drinks })
  }

  const getDrinksByIngredient = async (ing) => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ing}`)
    dispatch({ type: GET_DRINK_BY_I, payload: res.data.drinks })
  }

  const getDrinksByCategory = async (cat) => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`)
    dispatch({ type: GET_DRINK_BY_C, payload: res.data.drinks })
  }

  return (
    <DrinkContext.Provider value={{
      drinks: state.drinks,
      drink: state.drink,
      ingredients: state.ingredients,
      categories: state.categories,
      loading: state.loading,
      searchDrinks,
      getDrink,
      getIngredients,
      getCategories,
      getDrinksByIngredient,
      getDrinksByCategory
    }}>
      {props.children}
    </DrinkContext.Provider>
  )
}

export default DrinkState
