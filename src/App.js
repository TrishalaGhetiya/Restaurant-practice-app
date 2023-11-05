import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </>
  );
}

export default App;
