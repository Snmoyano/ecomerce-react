import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductInfo from "../components/productId/ProductInfo";
import SimilarProduct from "../components/productId/SimilarProduct";
import SliderImgs from "../components/productId/SliderImgs";
import "./styles/productId.css";

const ProductId = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;

    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <div className="history">
        <Link className="links-a history__link" to="/">
          Home
        </Link>
        <div className="history__separator"></div>
        <b className="history__separator-title">{product?.title}</b>
      </div>
      <div className="container__product-id">
        {" "}
        {product && <SliderImgs product={product} />}
        <ProductInfo product={product} />
      </div>
      <SimilarProduct product={product} />
    </div>
  );
};

export default ProductId;
