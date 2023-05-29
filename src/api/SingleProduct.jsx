import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";

const SingleProductContext = createContext();

export default function SingleProduct({children}) {
  const [singleProduct, setSingleProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        setSingleProduct(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) return <Spinner />;
  if (!singleProduct) return <Spinner />;
  if (isError) return <LoadErr />;

  return (
    <SingleProductContext.Provider value={{ singleProduct }}>
      {children}
    </SingleProductContext.Provider>
  );
}
