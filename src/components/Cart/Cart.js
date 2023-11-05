import React from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[{ id: "c1", name: "rice", amount: 2, price: 120 }].map(
    (item) => <li>{item.name}</li>
  )}</ul>;
  return (
    <Modal>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>400</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['classes--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
