import { useState, useEffect, createContext } from "react";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";

const url = "https://api.noroff.dev/api/v1/online-shop";
const ProductContext = createContext();

export default function ProductListProvider ({children}) {
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
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
