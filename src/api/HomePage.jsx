import React, { useContext } from "react";
import ProductListProvider, {
  ProductContext,
} from "./ProductList";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";


export default function HomePage() {
  return (
    <ProductListProvider>
      <ProductListComponent />
    </ProductListProvider>
  );
}

function ProductListComponent() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <div className="h-screen flex flex-col items-center text-black">
            <SearchBar />
            {products.length > 0 && (
              <Card products={products} title="All Products" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
