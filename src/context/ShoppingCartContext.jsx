/* eslint-disable no-undef */
import { createContext, useContext, useState } from "react";
import getData from "../pages/Home";

const ShoppingCartContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Gets Current Cart Content
  function getCartContent(id) {
    return cartItems.find(item.id === id)?.quantity || 0;
  }

  // Increases Cart Content By One
  function increaseCart(id) {
    const quantity = getCartContent(id);

    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  // Decreases Cart Content By One
  function decreaseCart(id) {
    const quantity = getCartContent(id);

    if (quantity == 1) {
      wipeCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  // Delete everything in Cart
  function wipeCart(id) {
    setCartItems((cartItems) =>
      cartItems.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  // Get Total Cost Of Cart
  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((item) => {
      const itemsData = getData(item.id);
      totalCost += itemsData.price * item.quantity;
    });
    return totalCost;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getCartContent,
        eraseFromCart,
        addToCart,
        wipeCart,
        increaseCart,
        decreaseCart,
        itemCost,
        getTotalCost,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;