import React, { useReducer } from 'react'
import axios from 'axios'
import DrinkReducer from './drinkReducer'
import DrinkContext from './drinkContext'
import { drinkFilter } from '../helpers'
import {
  SEARCH_DRINKS,
  GET_DRINK,
  GET_ALCOHOLIC,
  GET_INGREDIENTS,
  GET_CATEGORIES,
  GET_GLASSES,
  IS_LOADING,
  GET_DRINK_BY_A,
  GET_DRINK_BY_I,
  GET_DRINK_BY_C,
  GET_DRINK_BY_G,
  CLEAR
} from './types'

const DrinkState = props => {
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
      glass: false
    },
    loading: false
  }

  const [state, dispatch] = useReducer(DrinkReducer, initialState)

  const isLoading = () => dispatch({ type: IS_LOADING })

  const clearList = () => dispatch({ type: CLEAR })

  const searchDrinks = async txt => {
    isLoading()
    let payload
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${txt}`)
    if (res.data.drinks == null) {
      payload = ['404']
    } else {
      payload = res.data.drinks
    }
    dispatch({ type: SEARCH_DRINKS, payload: payload })
  }

  const getDrink = async (id) => {
    isLoading()
    let payload
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    if (res.data.drinks == null) {
      payload = '404'
    } else {
      payload = res.data.drinks[0]
    }
    dispatch({ type: GET_DRINK, payload: payload })
  }

  const getAlcoholic = async () => {
    isLoading()
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
    dispatch({ type: GET_ALCOHOLIC, payload: res.data.drinks })
  }
  const getDrinksByAlcoholic = async (alc) => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alc}`)
    const drinkPayload = drinkFilter(res.data.drinks, state.drinks)
    dispatch({ type: GET_DRINK_BY_A, payload: drinkPayload})
  }

  const getIngredients = async () => {
    isLoading()
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    dispatch({ type: GET_INGREDIENTS, payload: res.data.drinks })
  }
  const getDrinksByIngredient = async (ing) => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ing}`)
    const drinkPayload = drinkFilter(res.data.drinks, state.drinks)
    dispatch({ type: GET_DRINK_BY_I, payload: drinkPayload })
  }

  const getCategories = async () => {
    isLoading()
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    dispatch({ type: GET_CATEGORIES, payload: res.data.drinks })
  }
  const getDrinksByCategory = async (cat) => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`)
    const drinkPayload = drinkFilter(res.data.drinks, state.drinks)
    dispatch({ type: GET_DRINK_BY_C, payload: drinkPayload })
  }

  const getGlasses = async () => {
    isLoading()
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
    dispatch({ type: GET_GLASSES, payload: res.data.drinks })
  }
  const getDrinksByGlass = async (glass) => {
    isLoading()
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`)
    const drinkPayload = drinkFilter(res.data.drinks, state.drinks)
    dispatch({ type: GET_DRINK_BY_G, payload: drinkPayload })
  }

  return (
    <DrinkContext.Provider value={{
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
      getAlcoholic,
      getDrinksByAlcoholic,
      getIngredients,
      getDrinksByIngredient,
      getCategories,
      getDrinksByCategory,
      getGlasses,
      getDrinksByGlass,
      clearList
    }}>
      {props.children}
    </DrinkContext.Provider>
  )
}

export default DrinkState
