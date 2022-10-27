import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
    ascendingProduct: (state) => {
      state.sort((a, b) => +a.price - +b.price);
    },
    descendingProduct: (state) => {
      state.sort((a, b) => +b.price - +a.price);
    },
  },
});

export const { setProductsGlobal, ascendingProduct, descendingProduct } =
  productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = () => (dispatch) => {
  const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/products";
  return axios
    .get(URL)
    .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((err) => console.log(err));
};

export const getProductsByCategory = (id) => (dispatch) => {
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`;

  return axios
    .get(URL)
    .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((err = console.log(err)));
};
