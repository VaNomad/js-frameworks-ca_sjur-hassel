import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";

export default function Details() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { id } = useParams();

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

  console.log(data)

  {isLoading && <Spinner />}
  {!data && <Spinner />}
  {isError && <LoadErr />}

  const { title, description, price, discountedPrice, imageUrl } = data;

  return (
    <div>
      <div>Title: {title}</div>
      <div>Image: <img src={imageUrl} alt={title} /></div>
      <div>Description: {description}</div>
      <div>Price: {price}</div>
      <div>Discounted Price: {discountedPrice}</div>
    </div>
  );
}
