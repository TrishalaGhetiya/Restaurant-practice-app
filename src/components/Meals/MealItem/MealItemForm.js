import React, { useRef, useState } from "react";

import classes from "./MealItmForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const amountInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "text",
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
