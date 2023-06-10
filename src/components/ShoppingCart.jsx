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
          <div className="flex h-screen items-center justify-center px-5 text-3xl md:text-5xl">
            <ArrowBack />
            <h1>Your shopping cart is empty</h1>
          </div>
        ) : (
          <>
            <div className=" z-10 m-2 mt-[90px] rounded-full bg-black px-2 py-1 text-center text-xs font-semibold uppercase text-white xs:text-base">
              <p>Your Cart</p>
            </div>
            <div className="relative flex flex-col justify-center lg:items-center">
              <ArrowBack />
              {/* Checkout Label  */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex flex-col items-center justify-between rounded-lg p-3 shadow-lg md:w-[500px] md:flex-row lg:w-[900px] xl:w-[1100px]"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="m-3 h-[200px] w-[200px] rounded-lg object-cover shadow-md"
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
                  <div className="flex flex-col gap-4 md:w-1/2 lg:w-2/3 lg:flex-row lg:justify-around">
                    {/* Title & Price */}
                    <div className="flex flex-col items-center">
                      <h1 className="mb-4 border-b text-xl">{item.title}</h1>

                      {item.discountedPrice &&
                      item.discountedPrice < item.price ? (
                        <div className="text-lg">
                          <h2>{formatCurrency(item.discountedPrice)}</h2>
                          <h2 className="text-amber-600 line-through decoration-black">
                            {formatCurrency(item.price)}
                          </h2>
                        </div>
                      ) : (
                        <h2 className="text-xl">
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
                          <span className="text-2xl text-black">
                            {item.quantity}
                          </span>
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
            <div className="fixed bottom-[120px] z-10 mx-4 w-full border-y-2 border-gray-400 bg-white px-10 py-2 text-center ">
              <h1 className="text-base">
                Total: {formatCurrency(getTotalCost())}
              </h1>
            </div>
            <Link to="/checkout">
              <button className="buttonCta fixed bottom-[65px] left-0 right-0 mx-auto">
                Check Out
              </button>
            </Link>
            <Link to={"/"}>
              <button className="buttonNormal fixed bottom-[10px] left-0 right-0 mx-auto">
                Back to Shop
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
