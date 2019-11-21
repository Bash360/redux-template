import {CHANGE_SEARCH_FIELD} from "./constants";

let setSearchField = text => (
  {
  type: CHANGE_SEARCH_FIELD,
  payload:text
});


export default setSearchField;