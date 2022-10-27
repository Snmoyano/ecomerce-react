import React from "react";
import "./styles/filterPrice.css";

const FilterPrice = ({ setFilterByPrice }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = +e.target.from.value;
    const to = +e.target.to.value;
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity,
    };
    setFilterByPrice(obj);
  };
  return (
    <div className="dropdown">
      <h3>Price</h3>
      <form
        onSubmit={handleSubmit}
        className="dropdown-content container__form"
      >
        <div className="form__inputs">
          <label htmlFor="from">From</label>
          <input type="number" id="from" />
        </div>
        <div className="form__inputs">
          <label htmlFor="to">To</label>
          <input type="number" id="to" />
        </div>
        <button className="form__btn">Filter</button>
      </form>
    </div>
  );
};

export default FilterPrice;
