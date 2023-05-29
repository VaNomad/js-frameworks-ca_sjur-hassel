import React, { useContext } from "react";
import ProductListProvider, {
  ProductContext,
} from "../../api/ProductList";
import Product from "../../api/SingleProduct";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";


// export default function Store() {
//   return (
//     <ProductListProvider>
//       <ProductListComponent />
//     </ProductListProvider>
//   );
// }

export default function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div className="h-screen flex flex-col items-center text-black">
        <SearchBar />
        {products.length > 0 && (
          <Card products={products} title="All Products" />
        )}
      </div>
      <div>
        {ProductListProvider.map((product) => (
          <>
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} />
            </div>
            <Product key={product.id} data={product} />
          </>
        ))}
      </div>
    </div>
  );
}
