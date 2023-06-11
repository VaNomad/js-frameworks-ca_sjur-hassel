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
    <div className="container mx-auto w-full md:max-w-xl lg:max-w-4xl">
      <div className="mt-8">

        {/* Headline & BackArrow */}
        <div className="relative flex items-center justify-center md:flex-wrap md:justify-center">
          <ArrowBack />
          <h1 className="z-10 mx-auto mb-3 mt-8 rounded-full bg-black px-2 py-1 text-center font-exa text-xs font-semibold uppercase text-white xs:text-base">
            <p>Item Details</p>
          </h1>
        </div>

        {/* Image */}
        <div className="flex flex-col gap-6 px-4 md:flex-row">
          <div className="relative m-3 mt-10 md:mx-auto">
            <img
              src={imageUrl}
              alt={title}
              className="md:my-10 w-full rounded-xl md:flex md:items-center lg:max-w-sm"
            />
            {discountedPrice && discountedPrice < price && (
              <div className="absolute top-[-15px] md:top-5 left-[-15px] z-10 flex font-karla items-center rounded-full border border-lime-500 bg-lime-400 px-2 py-1 text-sm shadow-lg xs:text-base md:text-lg">
                <BiMinus className="mr-1" />
                {discountPercentage(discountedPrice, price)}%
              </div>
            )}
          </div>

          {/* Details */}
          <div className="m:mt-10 flex flex-col justify-center md:my-10 font-karla">
            <div className=" flex flex-col items-center justify-around gap-4 rounded-xl md:gap-1">
              <div className="miniCard bg-white">
                <h1 className="border-b border-gray-500 p-3 font-syne text-2xl">
                  {title}
                </h1>
                <div className="p-3 text-sm">{description}</div>
              </div>
              <div className="flex-around miniCard flex flex-col items-center bg-white xs:w-full xs:flex-row xs:justify-around">
                <div className="pb-2">
                  <h2 className="text-sm font-semibold">Avg Rating:</h2>
                  <div className="m-1 rounded-full bg-amber-500 px-3 py-2 text-center">
                    <StarRatingAverage
                      ratings={reviews.map((item) => item.rating)}
                    />
                  </div>
                </div>
                <div className="pb-2">
                  <h2 className="text-sm font-semibold w-[100px]">Search Tags: </h2>
                  <div className="m-1 rounded-full bg-cyan-500 py-1 pe-2 ps-3 text-white">
                    #{tags}
                  </div>
                </div>
              </div>
              <div className="w-full pb-3 text-sm">
                <Reviews reviews={reviews} />
              </div>
              <p className="hidden">{price}</p>
              <div className="mb-4 text-xl font-bold">
                {formatCurrency(discountedPrice)}
              </div>
            </div>
            <div className="flex flex-col">
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
                    className="buttonNormal mb-8 shadow-lg"
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
    </div>
  );
}
