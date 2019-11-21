import { combineReducers } from "redux";
import restaurantReducer from "./restaurant";
import searchReducer from "./search";

export default combineReducers({restaurantReducer,searchReducer});
