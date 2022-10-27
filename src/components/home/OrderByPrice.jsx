import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingProduct,
  descendingProduct,
} from "../../store/slices/products.slice";
import "./styles/orderByPrice.css";

const OrderByPrice = () => {
  const dispatch = useDispatch();
  const handleAscending = () => {
    dispatch(ascendingProduct());
  };
  const handleDescending = () => {
    dispatch(descendingProduct());
  };
  return (
    <div className="dropdown__container-order">
      <h3 className="order__title">Order</h3>
      <div className="dropdown-content-list-order container__btn">
        <button onClick={handleAscending} className="btn__order">
          {" "}
          <i className="fa-solid fa-arrow-down-short-wide"></i>
        </button>
        <button onClick={handleDescending} className="btn__order">
          <i className="fa-solid fa-arrow-up-wide-short"></i>
        </button>
      </div>
    </div>
  );
};

export default OrderByPrice;
