import { createStore } from "redux";

const initialState = {
  categories:[],
  loadingCategories: true
}

function decathlonProducts(state = initialState, action) {
  switch(action.type) {
    case "UPDATE_CATEGORIES":
      console.log("action", action)
      return {
        ...state,
        categories: action.categories,
        loadingCategories: action.loadingCategories
      };
    default:
      return state;
  }
}

let store = createStore(decathlonProducts);

export default store;
