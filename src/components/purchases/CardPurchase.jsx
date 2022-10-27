import React from "react";
import "./styles/cardPurchases.css";

const CardPurchase = ({ purchase }) => {
  const date = [new Date(purchase.updatedAt).toDateString()];

  return (
    <article className="container__purchases">
      <header className="purchases__header">{date}</header>
      <div className="purchase-products">
        {purchase.cart.products.map((product) => (
          <section
            className="purchase-products-list product-item"
            key={product.id}
          >
            <h3 className="purchases__title">{product.title}</h3>
            <div className="purchases__quantity">
              {product.productsInCart.quantity}
            </div>
            <div className="purchases__price">
              <div className="">$</div>
              {product.price}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default CardPurchase;
