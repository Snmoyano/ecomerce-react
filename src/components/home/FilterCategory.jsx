import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../store/slices/products.slice";
import "./styles/filterCategories.css";

const FilterCategory = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`;
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);
  const dispatch = useDispatch();
  const handleFetchCategory = (id) => {
    if (id) {
      //peticion por filtro por categoria
      dispatch(getProductsByCategory(id));
    } else {
      //peticion todos los productos
      dispatch(getAllProducts());
    }
  };

  return (
    <article className="dropdown__container">
      <h3>Category</h3>
      <ul className="dropdown-content-list">
        <li onClick={() => handleFetchCategory()}>All Products</li>
        {categories?.map((category) => (
          <li
            onClick={() => handleFetchCategory(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
