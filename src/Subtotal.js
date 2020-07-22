import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";



function Subtotal() {
  return (
    <div className="subtotal">

<CurrencyFormat
  renderText={(value) => (
    <>
      <p>
        Subtotal
      </p>
        <small className="subtotal___gift">
          <input type="checkbox"/>
        </small>
     </>
  )}
    decimalScale={2}
    value={0}
    displayType={'text'}
    thousandSeparator={true}
    prefix={"$"}
  />
    <button>Proceed to checkout</button>
  </div>
  );
}

export default Subtotal;