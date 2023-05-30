import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";
// import { MdArrowBack } from "react-icons/md";
// import { BsTrash } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { formatCurrency } from "../utils/FormatCurrency";
import DetailsCard from "../components/DetailsCard";

export default function SingleItem() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const navigate = useNavigate();

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

  // const {
  //   title,
  //   imageUrl,
  //   description,
  //   reviews,
  //   tags,
  //   price,
  //   discountedPrice,
  // } = data;
  // const quantity = 1;

  return (
    <DetailsCard data={id}/>
  );
}
