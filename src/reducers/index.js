import { combineReducers } from "redux";
import restaurantReducer from "./restaurant";
import searchReducer from "./search";

export default combineReducers({restaurants:restaurantReducer,searchField:searchReducer});
