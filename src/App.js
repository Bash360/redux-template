import React, { useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import setSearchItem from "./actions/search";
import setResturants from "./actions/getrestaurants";
import { connect} from "react-redux";

const mapStateToProps = state => { 
  return {
    searchField: state.searchReducer.searchField,
    restaurants: state.restaurantReducer.restaurants
  }
}
const mapDispatchToProps = (dispatch) =>
{
  return {
    onSearchChange: (event) => dispatch(setSearchItem(event.target.value)), 
     getRestaurants:()=>dispatch(setResturants())
  }
}
  

 
 
function App({ searchField,onSearchChange,getRestaurants,restuarants}) {
  useEffect(() => { 
    getRestaurants();
  },[])
  console.log(restuarants)
  return (
    <div className="App">
      <input type="text" onChange={onSearchChange}></input>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
