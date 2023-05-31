import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // Gets all Items currently in the cart
  function getCartContent(id) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  // Adds one to cart
  function addOneToCart(id, price) {
    const quantity = getCartContent(id);

    if (quantity === 0) {
      setCartProducts((prevProducts) => [
        ...prevProducts,
        {
          id: id,
          quantity: 1,
          price: price,
        },
      ]);
    } else {
      setCartProducts(
        (prevProducts) => prevProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  // Removes one from Cart
  function eraseOneFromCart(id) {
    const quantity = getCartContent(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        (prevProducts) => prevProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  // Deletes all items of a product
  function deleteFromCart(id) {
    setCartProducts((prevProducts) =>
      prevProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  // The total price for the Cart contents
  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      const productPrice = cartItem.price;
      totalCost += productPrice * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getCartContent, // Gets all Items currently in the cart
    eraseOneFromCart, // Removes one from Cart
    addOneToCart, // Adds one to cart
    deleteFromCart, // Deletes all items of a product
    getTotalCost, // The total price for the Cart contents
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}
