import React, { useReducer } from 'react'
import axios from 'axios'
import DrinkReducer from './drinkReducer'
import DrinkContext from './drinkContext'
import {
  SEARCH_DRINKS,
  GET_DRINK,
  GET_INGREDIENTS,
  GET_CATEGORIES,
  IS_LOADING
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
      getCategories
    }}>
      {props.children}
    </DrinkContext.Provider>
  )
}

export default DrinkState
