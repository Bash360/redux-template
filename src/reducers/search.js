import {CHANGE_SEARCH_FIELD } from "../actions/constants";

const initialState = {
  searchField: ""
};

export default function searchItem(state = initialState, action = {}) { 
  console.log(action.type);
  switch (action.type) { 
    case CHANGE_SEARCH_FIELD:
    
      return { ...state, searchField: action.payload }
    
    default:
      return state;
  }
 

}