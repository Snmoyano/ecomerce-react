import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig.js";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    setCartGlobal: (state, action) => action.payload,
  },
});

export const { setCartGlobal } = cartSlice.actions;

export default cartSlice.reducer;

export const getAllProductsCart = () => (dispatch) => {
  const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
  return axios
    .get(URL, getConfig())
    .then((res) => dispatch(setCartGlobal(res.data.data.cart)))
    .catch((err) => console.log(err));
};
