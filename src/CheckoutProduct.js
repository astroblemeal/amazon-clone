import React from "react";
import "./CheckoutProduct.css";




function CheckoutProduct({id, title, image, price, rating}) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt=""/>

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
           <p className="checkoutProduct__price">
           <small>$</small>
           <strong>{price} </strong>
           </p>
           <div className="CheckoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
            <span>⭐</span>
            ))}
           </div>

           </div>
    </div>
    );
}

export default CheckoutProduct;