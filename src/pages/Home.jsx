import ProductList from "../api/ProductList";
// import Search from "../components/Search"
// import SearchBar from "../components/SearchBar";
import { ProductListProvider } from "../context/ProductListContext";

export default function Home() {
  return (
    <ProductListProvider>
      <div>
        {/* <Search /> */}
        <ProductList />
      </div>
    </ProductListProvider>
  );
}
