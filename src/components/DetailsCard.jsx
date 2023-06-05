import { MdArrowBack } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { formatCurrency } from "../utils/FormatCurrency";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function DetailsCard({ data }) {
  const navigate = useNavigate();
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getCartContent(data.id);
  console.log(cart.items);

  const { title, imageUrl, description, tags, price, discountedPrice } = data;

  return (
    <div className="flex h-screen flex-col">
      <div className="">
        <div className="relative flex items-center justify-end py-2">
          <MdArrowBack
            onClick={() => navigate(-1)}
            size={45}
            className="fixed left-[-20px] top-[150px] mx-8 cursor-pointer rounded-full bg-white p-[8px] shadow-sm duration-300 ease-in-out hover:p-[7px] hover:shadow-xl sm:left-0 sm:top-[160px]"
          />
          <h2 className="fixed top-[155px] mb-2 bg-black px-6 py-2 text-center font-semibold uppercase text-white sm:top-[165px] md:absolute md:top-[60px] md:z-[-1]">
            Item Details
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="mt-[50px] shadow-xl">
          <img
            src={imageUrl}
            alt={title}
            className="h-[300px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-gray-100 px-2">
          <div className="mx-3 my-4 flex h-[400px] flex-col items-center justify-around rounded-xl shadow-xl">
            <h1 className="border-b border-gray-500 p-3 text-3xl">{title}</h1>
            <div className="p-3">{description}</div>
            <div className="rounded-full bg-cyan-500 px-2 py-1 text-white">
              # {tags}
            </div>
            <div className="hidden text-xl font-bold">{price}</div>
            <div className="p-3 text-2xl font-bold">
              {formatCurrency(discountedPrice)}
            </div>
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
                  className="w-full rounded-md bg-fuchsia-600 px-3 py-2 text-xl font-light uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-fuchsia-500 hover:font-bold hover:tracking-widest hover:shadow-xl lg:w-[500px]"
                >
                  Add To Cart
                </button>
              </div>
            ) : (
              <>
                <div className="mb-2 flex items-center justify-around p-3">
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
                <Link to="/checkout">
                  <div className="p-3">
                    <button className="w-full rounded-md bg-lime-400 px-2 py-2 text-xl font-light uppercase tracking-widest transition-all duration-200 ease-in-out hover:bg-lime-300 hover:font-bold hover:tracking-widest hover:shadow-xl lg:w-[500px]">
                      Check out
                    </button>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
