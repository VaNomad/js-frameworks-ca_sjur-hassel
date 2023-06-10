import ProductList from "../api/ProductList";
// import { ProductListProvider } from "../context/ProductListContext";

export default function Home() {
  return (
    // <ProductListProvider>
      <div>
        <ProductList />
      </div>
    // </ProductListProvider>
  );
}
