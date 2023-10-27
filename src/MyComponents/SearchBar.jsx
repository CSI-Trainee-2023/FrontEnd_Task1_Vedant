import React from 'react'
import './SearchBar.css'
import SearchImage from '../assets/SearchImage.png'
const SearchBar=() =>{
  return (
<div className="SearchContainer">
    <div className='searchBar'>
      <div className="textField">
        <img src={SearchImage} alt="" />
        <input type="text"/>
      </div>
    </div>

<div>
    <button id="search">Search</button>
</div>
</div>
  )}
  export default SearchBar