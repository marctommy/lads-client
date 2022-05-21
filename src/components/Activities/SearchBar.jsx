import React, { useState } from "react";
import Filtered from "./Filtered";
import ItemActivity from "./ItemActivity";
const SearchBar = ({ listOfActivities }) => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (element) => {
    //convert input text to lower case
    const lowerCase = element.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        <input
          id="outlined-basic"
          placeholder="Search for Category"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <Filtered listOfActivities={listOfActivities} input={inputText} />
    </div>
  );
};

export default SearchBar;
