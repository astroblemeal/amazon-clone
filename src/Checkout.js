import React from 'react';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";





function Checkout() {
 const [{ basket }] = useStateValue();
 return (
  <div className="checkout">
  <div className="checkout__left">
  <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_Concepts_R7_LP_DesktopHero_1500x300_v1.png" alt=""
  />
  {basket?.length === 0 ? (
    <div>
    <h2> Your Basket is empty</h2>
    <p> You have no items in your basket. To buy one or more items click "Add to Basket" on the front page"</p>
    </div>
        // else ES6 way
        ) : (
        <div>
        <h2 className="checkout__title"> Your Basket</h2>
        {basket.map(item => (
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
      </div>
    )}
        </div>
     {basket.length > 0 && (
      <div className="checkout__right">
      <Subtotal />

      </div>
      )}

  </div>
 );
}

export default Checkout;
