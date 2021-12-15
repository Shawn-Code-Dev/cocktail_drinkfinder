import {
  SEARCH_DRINKS,
  GET_DRINK,
  GET_INGREDIENTS,
  GET_CATEGORIES,
  GET_GLASSES,
  IS_LOADING,
  GET_DRINK_BY_I,
  GET_DRINK_BY_C,
  GET_DRINK_BY_G,
  CLEAR,
  GET_ALCOHOLIC,
  GET_DRINK_BY_A
} from './types'

const drinkReducer = (state, action) => {
  switch(action.type){
    case SEARCH_DRINKS:
      return {
        ...state,
        drinks: action.payload,
        selected: {
          category: false,
          ingredient: false,
          glass: false
        },
        loading: false
      }
    case GET_DRINK:
    return {
      ...state,
      drink: action.payload,
      loading: false
    }
    case GET_ALCOHOLIC:
      return {
        ...state,
        alcoholic: action.payload,
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
    case GET_GLASSES:
      return {
        ...state,
        glasses: action.payload,
        loading: false
      }
    case GET_DRINK_BY_A:
      return {
        ...state,
        drinks: action.payload,
        selected: {
          ...state.selected,
          alcoholic: true
        },
        loading: false
      }
    case GET_DRINK_BY_I:
      return {
        ...state,
        drinks: action.payload,
        selected: {
          ...state.selected,
          ingredient: true
        },
        loading: false
      }
    case GET_DRINK_BY_C:
      return {
        ...state,
        drinks: action.payload,
        selected: {
          ...state.selected,
          category: true
        },
        loading: false
      }
    case GET_DRINK_BY_G:
      return {
        ...state,
        drinks: action.payload,
        selected: {
          ...state.selected,
          glass: true
        },
        loading: false
      }
    case CLEAR:
      return {
        ...state,
        drinks: [],
        selected: {
          category: false,
          ingredient: false,
          glass: false
        } 
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
