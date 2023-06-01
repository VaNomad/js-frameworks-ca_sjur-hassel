import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // Gets all Items currently in the cart
  function getCartContent(id) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  // Adds one to cart
  function addOneToCart(id, title, imageUrl, price, discountedPrice) {
    const quantity = getCartContent(id);

    if (quantity === 0) {
      setCartProducts((prevProducts) => [
        ...prevProducts,
        {
          quantity: 1,
          id: id,
          title: title,
          imageUrl: imageUrl,
          price: price,
          discountedPrice: discountedPrice,
        },
      ]);
    } else {
      setCartProducts((prevProducts) =>
        prevProducts.map((product) =>
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

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts((prevProducts) =>
        prevProducts.map((product) =>
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
      let productPrice = cartItem.discountedPrice;
      if (!cartItem.discountedPrice) {
        productPrice = cartItem.price
      }
      totalCost += productPrice * cartItem.quantity;
    });
    return totalCost;
  }

  // Discount Calculation
  function discountPercentage() {
    if (cartProducts.discountedPrice) {
      const discount = cartProducts.price - cartProducts.discountedPrice;
      const percent = Math.round((discount / cartProducts.price) * 100);
      return percent;
    } else {
      return 0
    }
  }

  const contextValue = {
    items: cartProducts,
    getCartContent, // Gets all Items currently in the cart
    eraseOneFromCart, // Removes one from Cart
    addOneToCart, // Adds one to cart
    deleteFromCart, // Deletes all items of a product
    getTotalCost, // The total price for the Cart contents
    discountPercentage, // The discount in percent
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
