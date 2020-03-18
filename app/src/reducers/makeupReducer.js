import { FETCH_DATA, UPDATE_PRODUCTS, SET_ERROR } from "../actions/makeupAction";

const initialState = {
    products: [],
    isFetchingData: false,
    error: ""
  };

  export const makeupReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          isFetchingData: true,
          products: []
        };
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          isFetchingData: false
        };
      case SET_ERROR:
        return {
          ...state,
          isFetchingData: false,
          error: action.payload
        };
      default:
        return state;
    }
  };