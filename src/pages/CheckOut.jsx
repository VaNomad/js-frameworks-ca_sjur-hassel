import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { BsTrash } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi";
import { formatCurrency } from "../utils/FormatCurrency";

export default function CheckOut() {
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
          <div className="flex flex-col items-center justify-center px-5 text-3xl md:text-5xl">
            <h1>Your shopping cart is empty</h1>
          </div>
        ) : (
          <>
            <div className="mt-[90px] flex flex-col justify-center lg:items-center">
              {/* Checkout Label  */}
              <div className="fixed right-0 top-[155px] z-10 mb-2 flex flex-col bg-black px-2 py-2 text-center text-xs font-semibold uppercase text-white sm:flex-row sm:px-6 sm:py-3 sm:text-lg">
                <span>check </span>
                <span>out</span>
              </div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex flex-col items-center justify-between p-3 md:w-[500px] md:flex-row md:border-b md:border-gray-300 lg:w-[900px] xl:w-[1100px]"
                >
                  {/* Image */}
                  <div>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="m-3 h-[200px] w-[200px] rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:w-3/5 lg:flex-row lg:justify-between">
                    {/* Title & Price */}
                    <div className="flex flex-col">
                      <p className="text-lg">{item.title}</p>
                      <p className="text-lg font-normal text-gray-500">
                        {" "}
                        {item.discountedPrice
                          ? formatCurrency(item.discountedPrice)
                          : formatCurrency(item.price)}
                      </p>
                    </div>
                    {/* Discount Overlay */}
                    <div className="absolute right-0 top-3 flex items-center rounded-full bg-green-500 px-2 py-1 text-sm text-white md:right-[250px] lg:right-[650px] xl:right-[850px]">
                      <BiMinus />
                      {discountPercentage(item.discountedPrice, item.price)} %
                    </div>
                    <div className="mt-2 flex flex-col items-center gap-2 md:gap-6">
                      <div className="flex items-center justify-between gap-4">
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
            </div>
            <div className="h-[100px]"></div>
            <div className="fixed bottom-[70px] z-10 mx-4 w-full border-2 border-green-500 bg-white px-1 py-1 text-center">
              <h1 className="text-xl">
                Total: {formatCurrency(getTotalCost())}
              </h1>
            </div>
            <button className="fixed bottom-[15px] rounded-md bg-fuchsia-600 px-20 py-2 text-xl font-light uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-fuchsia-500 hover:font-bold hover:tracking-widest hover:shadow-xl">
              Place Order
            </button>
          </>
        )}
      </div>
    </>
  );
}
