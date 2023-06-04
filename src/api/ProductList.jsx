import { useState, useEffect } from "react";
import Card from "../components/Card";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";
import { BASE_URL } from "../constants/url";
// import { useProductListContext } from "../context/ProductListContext";
// import { useShoppingCartContext } from "../context/ShoppingCartContext";

// const url = "https://api.noroff.dev/api/v1/online-shop";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(BASE_URL);
        const json = await response.json();
        
        setIsLoading(false);
        setProducts(json);
        
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) return <Spinner />;
  if (isError) return <LoadErr />;

  return (
    <div className="h-screen flex flex-col items-center text-black">
      <Card
        products={products}
        title="All Products"
      />
    </div>
  );
}

