import {
  SEARCH_DRINKS,
  GET_DRINK,
  IS_LOADING,
  CLEAR,
  GET_DRINK_BY_F,
  GET_FILTER,
} from "./types";

const drinkReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_DRINKS:
      return {
        ...state,
        drinks: action.payload,
        selected: {
          category: false,
          ingredient: false,
          glass: false,
        },
        loading: false,
      };
    case GET_DRINK:
      return {
        ...state,
        drink: action.payload,
        loading: false,
      };
    case GET_FILTER:
      return {
        ...state,
        [action.payload.filterName]: action.payload.filterList,
        loading: false,
      };
    case GET_DRINK_BY_F:
      return {
        ...state,
        drinks: action.payload.drinks,
        selected: {
          ...state.selected,
          [action.payload.selected]: true,
        },
        loading: false,
      };
    case CLEAR:
      return {
        ...state,
        drinks: [],
        selected: {
          category: false,
          ingredient: false,
          glass: false,
        },
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default drinkReducer;
