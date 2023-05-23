import { useState, useEffect } from "react";
import Card from "../components/Card";
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

  { isLoading && <Spinner /> }
  {isError && <LoadErr />}

  return (
    <div className="h-screen flex flex-col items-center text-black">
      <h1 className=" text-4xl font-bold">Home Page</h1>
      <div className="text-xl">
        {"<"} searchbar placeholder {">"}
      </div>
      {products.length > 0 && <Card products={products} title="All Products" />}
    </div>
  );
}

