import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../utils/Spinner";
import LoadErr from "../utils/LoadErr";
import DetailsCard from "../components/DetailsCard";

export default function SingleItem() {
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

 

  return (
    <DetailsCard data={data}/>
  );
}

// import { MdArrowBack } from "react-icons/md"; LINE 6
// import { BsTrash } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { formatCurrency } from "../utils/FormatCurrency";

// const navigate = useNavigate(); LINE 14

 // const {         AFTER 3 IFS, BEFORE RETURN
  //   title,
  //   imageUrl,
  //   description,
  //   reviews,
  //   tags,
  //   price,
  //   discountedPrice,
  // } = item;
  // const quantity = 1;