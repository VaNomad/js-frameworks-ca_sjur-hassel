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

export default function DetailsCard({ data }) {
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getCartContent(data.id);
  const { discountPercentage } = useShoppingCartContext();

  const {
    title,
    imageUrl,
    description,
    tags,
    price,
    discountedPrice,
    reviews,
  } = data;

  return (
    <div className="container mx-auto max-w-sm md:max-w-xl">
      <div className="relative flex items-center justify-end md:justify-center">
        <ArrowBack />
        <div className="absolute top-[90px] xs:top-[75px] right-3 z-10 m-2 rounded-full bg-black px-2 py-1 text-center text-xs font-semibold uppercase text-white">
          <p>Item Details</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="m-3 relative mt-[90px] xs:mt-[75px] md:mx-auto md:my-auto">
          <img src={imageUrl} alt={title} className="rounded-xl w-[400px] object-cover md:h-[400px]" />
          {discountedPrice && discountedPrice < price && (
            <div className="absolute bottom-[10px] right-[10px] z-10 flex items-center rounded-full border border-lime-500 bg-lime-400 px-2 py-1 text-sm shadow-lg xs:text-base md:text-lg">
              <BiMinus className="mr-1" />
              {discountPercentage(discountedPrice, price)}%
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center md:mt-[60px]">
          <div className="m-3 flex flex-col items-center justify-around rounded-xl gap-5 md:gap-1">
            <div className="miniCard bg-white">
              <h1 className="border-b border-gray-500 p-3 text-2xl">{title}</h1>
              <div className="p-3 text-sm">{description}</div>
            </div>
            <div className="xs:w-full flex-around miniCard flex flex-col items-center bg-white xs:flex-row xs:justify-around">
              <div className="pb-2">
                <h2 className="text-sm font-semibold">Avg Rating:</h2>
                <div className="m-1 rounded-full bg-amber-500 px-3 py-2 text-center">
                  <StarRatingAverage
                    ratings={reviews.map((item) => item.rating)}
                  />
                </div>
              </div>
              <div className="pb-2">
                <h2 className="text-sm font-semibold">Search Tags: </h2>
                <div className="m-1 rounded-full bg-cyan-500 py-1 pe-2 ps-3 text-white">
                  #{tags}
                </div>
              </div>
            </div>
            <div className="w-full pb-3 text-sm">
              <Reviews reviews={reviews} />
            </div>
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
                <Link to="/cart">
                  <div className="flex justify-center p-3">
                    <button className="buttonCta">Go To Cart</button>
                  </div>
                </Link>
                <Link to="/">
                  <div className="flex justify-center p-3">
                    <button className="buttonNormal">Shop More</button>
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
