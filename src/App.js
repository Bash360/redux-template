import React from 'react';
import logo from './logo.svg';
import './App.css';
import setSearchItem from "./actions/search";
import { connect} from "react-redux";

const mapStateToProps = state => { 
  return {
    searchField:state.searchField
  }
}
const mapDispatchToProps = (dispatch) =>
{
  return {onSearchChange: (event) => dispatch(setSearchItem(event.target.value))}
}
  

 
 
function App({ searchField,onSearchChange}) {
  console.log(searchField);
  
  return (
    <div className="App">
      <input type="text" onChange={onSearchChange}></input>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
