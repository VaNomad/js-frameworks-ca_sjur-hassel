
import StarRating from "../utils/StarRating";
import StarRatingAverage from "../utils/StarRatingAverage";
import ArrowBack from "./ArrowBack";
import { BsTrash } from "react-icons/bs";
import { formatCurrency } from "../utils/FormatCurrency";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Reviews from "../utils/Reviews";

export default function DetailsCard({ data, average }) {
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getCartContent(data.id);
  console.log(cart.items);

  const {
    title,
    imageUrl,
    description,
    tags,
    price,
    discountedPrice,
    rating,
    reviews,
  } = data;

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="relative flex items-center justify-end md:justify-center">
        <ArrowBack />
        <div className="absolute top-[90px] mb-2 bg-black p-2 text-center text-xs font-semibold uppercase text-white xs:text-sm md:top-[60px]">
          <p>Item</p>
          <p>Details</p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:h-screen md:flex-row">
        <div className="mt-[60px] xs:mt-[35px] md:mt-[50px]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full object-cover md:h-screen"
          />
        </div>
        <div className="flex flex-col justify-center bg-gray-100">
          <div className="mx-3 flex flex-col items-center justify-around md:gap-5 md:px-2 md:py-4">
            <div className="miniCard mb-2 w-full">
              <h1 className="border-b border-gray-500 p-3 text-2xl">{title}</h1>
              <div className="p-3 text-sm">{description}</div>
            </div>
            <div className="flex-around miniCard flex w-full flex-col items-center xs:flex-row xs:justify-around">
              <div className="pb-2">
                <h2 className="text-sm font-semibold">Avg Rating:</h2>
                <div className="rounded-full bg-amber-500 px-2 py-1 text-center">
                  <StarRatingAverage ratings={average} />
                </div>
              </div>
              <div className="pb-2">
                <h2 className="text-sm font-semibold">Search Tags: </h2>
                <div className="rounded-full bg-cyan-500 px-2 py-1 text-white">
                  # {tags}
                </div>
              </div>
            </div>
            <div className="w-full pb-3 text-sm">
              <StarRating rating={rating} />
              <Reviews reviews={reviews} />
            </div>
            <p className="hidden">{price}</p>
            <div className="mb-4 text-xl font-bold">
              {formatCurrency(discountedPrice)}
            </div>
          </div>
          <div>
            {productQuantity === 0 ? (
              <div className="mb-3 flex justify-center px-3">
                <button
                  onClick={() =>
                    cart.addOneToCart(
                      data.id,
                      data.title,
                      data.imageUrl,
                      data.price,
                      data.discountedPrice,
                      data.rating,
                      data.reviews
                    )
                  }
                  className="buttonNormal shadow-lg"
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
