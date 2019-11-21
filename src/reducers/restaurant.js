import { REQUEST_RESTAURANT_PENDING, REQUEST_RESTAURANT_FAILED, REQUEST_RESTAURANT_SUCCESS } from "../actions/constants";

const initialState = { restaurants: [],isPending:false,error:"" };

export default function restaurantReducer(state = initialState, action = {}) { 

  switch (action.type) { 
   
    case REQUEST_RESTAURANT_PENDING:
      return { ...state, isPending: true };
    case REQUEST_RESTAURANT_SUCCESS:
      return { ...state, isPending: false, restaurants: action.payload };
    case REQUEST_RESTAURANT_FAILED:
      return { ...state, isPending: false, error: action.payload };

    default:
      return state; 
    
  }
  

  }

