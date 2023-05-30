import { MdArrowBack } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/FormatCurrency";
import { useNavigate } from "react-router-dom";
// import SingleItem from "../api/SingleItem";

export default function DetailsCard({data}) {
  const navigate = useNavigate();

  const {
    title,
    imageUrl,
    description,
    reviews,
    tags,
    price,
    discountedPrice,
  } = data;
  const quantity = 1;

  return (
    <div className="h-screen flex flex-col">
      <div className="">
        <div className="flex items-center justify-between py-2">
          <MdArrowBack
            onClick={() => navigate(-1)}
            size={30}
            className="w-1/4 cursor-pointer"
          />
          <h2 className="text-center mb-2 font-semibold uppercase bg-black text-white py-2 px-6">
            Item Details
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex justify-center bg-cover">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="flex flex-col px-2 m- justify-center">
          <h1 className="text-3xl p-3 border-b border-gray-500">{title}</h1>
          <div className="p-3">{description}</div>
          <div>{reviews && reviews.rating}</div>
          <div className="p-3">Tags #{tags}</div>
          <div className="text-xl font-bold hidden">{price}</div>
          <div className="test-xl font-bold p-3">
            {formatCurrency(discountedPrice)}
          </div>
          <div>
            {quantity === 0 ? (
              <Link to="/checkout" className="p-3">
                <button className="w-full p-3 rounded-md text-white uppercase bg-gradient-to-b from-violet-800 to-fuchsia-600 px-3 py-2 hover:bg-none hover:border-2 hover:border-green-700 hover:text-black hover:scale-105 transition-all duration-100 ease-in-out">
                  Add To Cart
                </button>
              </Link>
            ) : (
              <div className="flex justify-between p-3 items-center">
                <div className="flex justify-between items-center">
                  <button className="w-8 h-8 flex justify-center items-center rounded bg-blue-500 text-white">
                    -
                  </button>
                  <div className="text-gray-500 mx-4">
                    <span className="text-2xl text-black">{quantity}</span> in
                    cart
                  </div>
                  <button className="w-8 h-8 flex justify-center items-center rounded bg-blue-500 text-white">
                    +
                  </button>
                </div>
                <div>
                  <button className="w-8 h-8 flex justify-center items-center rounded bg-red-700 text-white">
                    <BsTrash size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
