import React from 'react';
import { UilSearch } from "@iconscout/react-unicons";
import "./Searchbar.css";

const Searchbar = () => {
  return (
     <div className="search-bar-container">
        <input type="search" className='search-bar' placeholder="Search" />
        <UilSearch className="search-icon"/>
     </div>
  );
}

export default Searchbar