import React, { useState } from "react";
import Filtered from "./Filtered";

const SearchBar = ({ listOfActivities, setSearchBarInput }) => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (element) => {
    //convert input text to lower case
    const lowerCase = element.target.value.toLowerCase();
    setInputText(lowerCase);
    setSearchBarInput(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        <input
          id="outlined-basic"
          placeholder="Search for Category"
          onChange={inputHandler}
          value={inputText}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
