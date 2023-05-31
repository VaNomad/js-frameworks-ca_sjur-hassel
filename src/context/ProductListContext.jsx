import React, { createContext, useContext, useState } from "react";

const ProductListContext = createContext();

export function ProductListProvider({ children }) {
  const [products, setProducts] = useState([]);

  const productListValue = {
    products: products,
    setProducts,
  };

  console.log(products)

  return (
    <ProductListContext.Provider value={productListValue}>
      {children}
    </ProductListContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductListContext() {
  return useContext(ProductListContext);
}
