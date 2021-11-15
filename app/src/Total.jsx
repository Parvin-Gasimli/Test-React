import React from "react";
import './total.css'

const Total = ({ totalprice }) => {
  return (
    <div className="checkout">
      <h1>Odenilecek Mebleg</h1>
      <div className="money">
        <h4>{totalprice}</h4>
        <p>$</p>
      </div>
      <button>Alis verisi Bitir</button>
      <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores consectetur molestiae ducimus aliquam corrupti assumenda itaque veniam quaerat saepe. Nemo error illo adipisci dolores ab ipsa nesciunt nobis deleniti.</p>
      <div className="cargo">
          <div className="cargoAmount">
              <p>Kargo</p>
              <p className="freeshipping">Bedava</p>
              <p className="cargoamount"> 10 $ </p>
          </div>
          <div className="orderTotal">
              <p>Products </p>
              <p className="orderamount"> {totalprice} $</p>

          </div>
      </div>
    </div>
  );
};

export default Total;
