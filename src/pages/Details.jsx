import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";

export default function Details() {
  const [data, setData] = useState(null);
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

        setData(json);
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
  if (!data) return <Spinner />;
  if (isError) return <LoadErr />;
  
  const { title, imageUrl, description, price, discountedPrice } = data;

  console.log(data)


  return (
    <div>
      <div>{title}</div>
      <div className="h-[400px] w-[400px] bg-cover">
        <img src={ imageUrl } alt={ title } />
      </div>
      <div>{description}</div>
      <div>{price}</div>
      <div>{discountedPrice}</div>
    </div>
  );
}
