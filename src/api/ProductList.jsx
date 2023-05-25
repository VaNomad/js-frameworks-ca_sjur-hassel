import { useState, useEffect, createContext, Children } from "react";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";

const context = createContext();
const url = "https://api.noroff.dev/api/v1/online-shop";

export default function ProductList() {
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

  return <context.Provider value={{ products }}>{Children}</context.Provider>;
}
