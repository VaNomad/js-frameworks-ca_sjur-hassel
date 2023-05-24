import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";
import { MdArrowBack } from "react-icons/md";

export default function Details() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="">
        <div className="flex items-center justify-between">
          <MdArrowBack onClick={() => navigate(-1)} size={30} className="w-1/4 cursor-pointer" />
          <h2 className="text-center mb-2 font-semibold uppercase bg-black text-white py-2 px-6">
            Item Details
          </h2>
        </div>
        <img src={imageUrl} alt={title} />
      </div>
      <div className="">
        <h1>{title}</h1>
        <div>{description}</div>
        <div>{price}</div>
        <div>{discountedPrice}</div>
      </div>
    </div>
  );
}
