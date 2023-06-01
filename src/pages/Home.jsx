import ProductList from "../api/ProductList"
import SearchBar from "../components/SearchBar";
import { ProductListProvider } from "../context/ProductListContext";

export default function Home() {
  return (
    <ProductListProvider>
      <div>
        <SearchBar />
        <ProductList />
      </div>
    </ProductListProvider>
  );
}
