import { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
// import Searching from "../components/Searching";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);

        setIsLoading(false);
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
      <SearchBar />
      {products.length > 0 && <Card products={products} title="All Products" />}
    </div>
  );
}

