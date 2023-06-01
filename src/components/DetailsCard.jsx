import { MdArrowBack } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/FormatCurrency";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
// import { ProductListContext } from "../context/ProductListContext";
import { useContext } from "react";


export default function DetailsCard({data}) {
  const navigate = useNavigate();
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getCartContent(data.id);
  console.log(cart.items)

  const {
    title,
    imageUrl,
    description,
    reviews,
    tags,
    price,
    discountedPrice,
  } = data;
  // const quantity = 0;

  return (
    <div className="flex h-screen flex-col">
      <div className="">
        <div className="relative flex items-center justify-end py-2">
          <MdArrowBack
            onClick={() => navigate(-1)}
            size={45}
            className="fixed left-[-20px] top-[150px] mx-8 cursor-pointer rounded-full bg-white p-[8px] shadow-lg sm:left-0 sm:top-[160px]"
          />
          <h2 className="fixed top-[155px] mb-2 bg-black px-6 py-2 text-center font-semibold uppercase text-white sm:top-[165px] md:absolute md:top-[60px] md:z-[-1]">
            Item Details
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex justify-center bg-cover">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="m- flex flex-col justify-center px-2">
          <h1 className="border-b border-gray-500 p-3 text-3xl">{title}</h1>
          <div className="p-3">{description}</div>
          <div>{reviews && reviews.rating}</div>
          <div className="p-3">Tags #{tags}</div>
          <div className="hidden text-xl font-bold">{price}</div>
          <div className="test-xl p-3 font-bold">
            {formatCurrency(discountedPrice)}
          </div>
          <div>
            {productQuantity === 0 ? (
              <div className="p-3">
                <button
                  onClick={() =>
                    cart.addOneToCart(
                      data.id,
                      data.title,
                      data.imageUrl,
                      data.price,
                      data.discountedPrice
                    )
                  }
                  className="hover:border-1 w-full rounded-md bg-gradient-to-b from-violet-800 to-fuchsia-600 p-3 px-3 py-2 text-xl font-light uppercase text-white transition-all duration-200 ease-in-out hover:border-fuchsia-700 hover:bg-none hover:text-fuchsia-700 hover:shadow-lg"
                >
                  Add To Cart
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => cart.eraseOneFromCart(data.id)}
                    className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-white"
                  >
                    -
                  </button>
                  <div className="mx-4 text-gray-500">
                    <span className="text-2xl text-black">
                      {productQuantity}
                    </span>{" "}
                    in cart
                  </div>
                  <button
                    onClick={() => cart.addOneToCart(data.id, data.price)}
                    className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-white"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => cart.deleteFromCart(data.id)}
                    className="flex h-8 w-8 items-center justify-center rounded bg-red-700 text-white"
                  >
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
