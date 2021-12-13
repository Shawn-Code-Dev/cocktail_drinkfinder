import {
  SEARCH_DRINKS,
  GET_DRINK,
  GET_INGREDIENTS,
  GET_CATEGORIES,
  IS_LOADING
} from './types'

const drinkReducer = (state, action) => {
  switch(action.type){
    case SEARCH_DRINKS:
      return {
        ...state,
        drinks: action.payload,
        loading: false
      }
    case GET_DRINK:
    return {
      ...state,
      drink: action.payload,
      loading: false
    }
    case GET_INGREDIENTS:
    return {
      ...state,
      ingredients: action.payload,
      loading: false
    }
    case GET_CATEGORIES:
    return {
      ...state,
      categories: action.payload,
      loading: false
    }
    case IS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default drinkReducer
