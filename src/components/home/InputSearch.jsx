import React from "react";
import "./styles/inputSearch.css";

const InputSearch = ({ setInputText, inputText }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <input
      className="input__search"
      value={inputText}
      onChange={handleChange}
      type="text"
      id=""
      placeholder="What are you  looking for?"
    />
  );
};

export default InputSearch;
