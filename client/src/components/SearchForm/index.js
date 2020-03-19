import React from "react";
import "./style.css";


function SearchForm({handleInputChange}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Movie Name:</label>
        <input
          onChange={e => handleInputChange(e)}
          
          name="search"
          type="text"
          className="form-control"
          placeholder="Type employee name"
          id="search"
        />
       

      </div>
    </form>
  );
}

export default SearchForm;
