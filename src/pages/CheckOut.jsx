import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { BsTrash } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi";
import { formatCurrency } from "../utils/FormatCurrency";
// import { useProductListContext } from "../context/ProductListContext";
// import { useContext } from "react";
// import { formatCurrency } from "../utils/FormatCurrency";

export default function CheckOut() {
  const { items, getTotalCost, discountPercentage } = useShoppingCartContext();
  const cart = useShoppingCartContext();
  // const { products } = useProductListContext();

  const productsCount = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center text-4xl font-bold text-black">
        {productsCount == 0 ? (
          <>
            <h1>Your shopping cart is empty</h1>
          </>
        ) : (
          <div className="h-screen">
            {/* Checkout Label  */}
            <div className="fixed right-0 top-[155px] z-[-1] mb-2 flex flex-col bg-black px-3 py-2 text-center text-base font-semibold uppercase text-white sm:flex-row sm:px-6 sm:py-3 sm:text-lg">
              <span>check </span>
              <span>out</span>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="relative mb-4 flex flex-col items-center justify-between border-b border-gray-300 p-3 md:w-[500px] md:flex-row lg:w-[900px]"
              >
                {/* Image */}
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="m-3 h-[200px] w-[200px] rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:flex-1 items-center justify-center lg:justify-around gap-4">
                  {/* Title & Price */}
                  <div className="flex flex-col justify-center">
                    <p className="text-center text-lg">{item.title}</p>
                    <p className="text-center text-lg font-normal text-gray-500">
                      {" "}
                      {item.discountedPrice
                        ? formatCurrency(item.discountedPrice)
                        : formatCurrency(item.price)}
                    </p>
                  </div>
                  {/* Discount Overlay */}
                  <div className="absolute right-0 top-3 flex items-center rounded-full bg-green-500 px-2 py-1 text-sm text-white md:right-[250px] lg:right-[650px]">
                    <BiMinus />
                    {discountPercentage(item.discountedPrice, item.price)} %
                  </div>
                  <div className="mt-2 flex flex-col items-center gap-2 md:gap-6">
                    <div className="flex items-center justify-between">
                      {/* Minus Button */}
                      <button
                        onClick={() => cart.eraseOneFromCart(item.id)}
                        className="rounded bg-blue-500 text-white"
                      >
                        <BiMinus />
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
                        className="rounded bg-blue-500 text-white"
                      >
                        <BiPlus />
                      </button>
                    </div>
                    {/* Trash Button */}
                    <div>
                      <button
                        onClick={() => cart.deleteFromCart(item.id)}
                        className="mt-2 flex h-9 w-9 items-center justify-center rounded bg-red-700 text-white md:mt-0 lg:mt-0"
                      >
                        <BsTrash size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl">
                Total: {formatCurrency(getTotalCost())}
              </h1>
              <button className="hover:border-[1px] mt-4 w-full rounded-md bg-gradient-to-b from-violet-800 to-fuchsia-600 p-3 px-3 py-2 text-xl font-light uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:border-fuchsia-700 hover:bg-none hover:text-fuchsia-700 hover:shadow-lg">
                Buy
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
