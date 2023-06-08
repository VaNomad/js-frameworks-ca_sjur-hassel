import StarRating from "../utils/StarRating";
import StarRatingAverage from "../utils/StarRatingAverage";
import ArrowBack from "./ArrowBack";
import { BsTrash } from "react-icons/bs";
import { formatCurrency } from "../utils/FormatCurrency";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Reviews from "../utils/Reviews";
import { BiMinus } from "react-icons/bi";

export default function DetailsCard({ data, average }) {
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getCartContent(data.id);
  const { discountPercentage } = useShoppingCartContext();
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
        <div className="z-10 absolute top-[90px] rounded-full m-2 py-1 px-2 text-center text-xs font-semibold uppercase xs:text-base bg-black text-white">
          <p>Item Details</p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:h-screen md:flex-row">
        <div className="relative mt-[60px] xs:mt-[35px] md:mt-[50px]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full object-cover md:h-screen"
          />
          {discountedPrice && discountedPrice < price && (
            <div className="z-10 absolute right-[10px] bottom-[10px] flex items-center px-2 py-1 rounded-full bg-lime-400 border border-lime-500 text-sm xs:text-base xs:text-lg shadow-lg">
              <BiMinus className="mr-1" />
              {discountPercentage(discountedPrice, price)}%
            </div>
          )}
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
                <div className="rounded-full bg-amber-500 m-1 px-2 py-1 text-center">
                  <StarRatingAverage ratings={average} />
                </div>
              </div>
              <div className="pb-2">
                <h2 className="text-sm font-semibold">Search Tags: </h2>
                <div className="rounded-full bg-cyan-500 m-1 pe-2 ps-3 py-1 text-white">
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
                      className="circleBtnBlue"
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
                      className="circleBtnBlue"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => cart.deleteFromCart(data.id)}
                      className="circleBtnRed"
                    >
                      <BsTrash size={20} />
                    </button>
                  </div>
                </div>
                <Link to="/checkout">
                  <div className="flex justify-center p-3">
                    <button className="buttonCta">
                      Go To Cart
                    </button>
                  </div>
                </Link>
                <Link to="/">
                  <div className="flex justify-center p-3">
                    <button className="buttonNormal">
                      Shop More
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
