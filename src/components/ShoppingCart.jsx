import ArrowBack from "../components/ArrowBack";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { BsTrash } from "react-icons/bs";
import { formatCurrency } from "../utils/FormatCurrency";
import { Link } from "react-router-dom";
import { BiMinus } from "react-icons/bi";

export default function ShoppingCart() {
  const { items, getTotalCost, discountPercentage } = useShoppingCartContext();
  const cart = useShoppingCartContext();

  const productsCount = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center text-4xl font-bold text-black">
        {productsCount === 0 ? (
          <div className=" flex h-screen items-center justify-center">
            <ArrowBack />
            <h1 className="z-10 mt-8 rounded-full px-2 py-1 text-center font-exa text-xl uppercase text-black">
              <p>Your Shopping Cart is Empty</p>
            </h1>
          </div>
        ) : (
          <>
            <div className="container mx-auto mt-[110px] xs:mt-[80px]">
              <h1 className="z-10 mx-auto mb-3 mt-8 md:mt-1 max-w-[110px] rounded-full bg-black px-2 py-1 text-center font-exa text-xs font-semibold uppercase text-white xs:max-w-[140px] xs:text-base">
                <p>Your Cart</p>
              </h1>
            </div>
            <div className="relative mb-[80px] mt-8 flex flex-col justify-center lg:items-center">
              <ArrowBack />
              {/* Checkout Label  */}
              <div className="mb-[120px]">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="mb-6 flex max-w-sm flex-col items-center justify-between gap-2 rounded-lg p-3 shadow-lg md:max-w-2xl md:flex-row font-karla"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="m-3 h-[150px] w-[150px] rounded-lg object-cover shadow-md"
                      />
                      {/* Discount Overlay */}
                      {item.discountedPrice &&
                        item.discountedPrice < item.price && (
                          <div className="absolute right-0 top-0 flex items-center rounded-full bg-lime-400 px-2 py-1 text-sm shadow-md">
                            <BiMinus />
                            {discountPercentage(
                              item.discountedPrice,
                              item.price
                            )}{" "}
                            %
                          </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 text-sm md:text-lg lg:flex-row lg:justify-around">
                      {/* Title & Price */}
                      <div className="flex flex-col items-center md:w-64">
                        <h1 className="mb-4 border-b font-syne">{item.title}</h1>
                        {item.discountedPrice &&
                        item.discountedPrice < item.price ? (
                          <div className="">
                            <h2>{formatCurrency(item.discountedPrice)}</h2>
                            <h2 className="text-amber-600 line-through decoration-black">
                              {formatCurrency(item.price)}
                            </h2>
                          </div>
                        ) : (
                          <h2 className="">
                            {formatCurrency(item.discountedPrice)}
                          </h2>
                        )}
                      </div>
                      <div className="mt-1 flex flex-col items-center gap-2 md:gap-6">
                        <div className="flex items-center justify-between gap-4">
                          {/* Minus Button */}
                          <button
                            onClick={() => cart.eraseOneFromCart(item.id)}
                            className="circleBtnBlue"
                          >
                            -
                          </button>
                          {/* Quantity */}
                          <div className="mx-4 flex text-gray-500">
                            <span className=" text-black">{item.quantity}</span>
                          </div>
                          {/* Plus Button */}
                          <button
                            onClick={() => cart.addOneToCart(item.id, item.price)}
                            className="circleBtnBlue"
                          >
                            +
                          </button>
                        </div>
                        {/* Trash Button */}
                        <div>
                          <button
                            onClick={() => cart.deleteFromCart(item.id)}
                            className="circleBtnRed md:mt-0 lg:mt-0"
                          >
                            <BsTrash size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fixed bottom-0 z-10 h-[160px] w-full bg-white text-center ">
              <h1 className="border-y-2 border-gray-400 py-2 text-xl font-karla font-bold">
                Total: {formatCurrency(getTotalCost())}
              </h1>
              <Link to="/checkout">
                <button className="buttonCta fixed bottom-[60px] left-0 right-0 mx-auto">
                  Check Out
                </button>
              </Link>
              <Link to={"/"}>
                <button className="buttonNormal fixed bottom-[10px] left-0 right-0 mx-auto">
                  Back to Shop
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
