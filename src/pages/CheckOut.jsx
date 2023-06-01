import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { BsTrash } from "react-icons/bs";
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
            <h2 className="fixed right-0 top-[155px] z-[-1] mb-2 bg-black px-6 py-2 text-center font-semibold uppercase text-white sm:top-[165px] md:absolute md:top-[60px]">
              Checkout
            </h2>
            {items.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-between border-b border-gray-300 p-3
              "
              >
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                </div>
                <p className="text-lg font-normal text-gray-500">
                  Price: {formatCurrency(item.discountedPrice)}
                </p>
                <div className="rounded-full bg-green-500 px-4 py-1 text-sm text-white">
                  <span className="text-black">Discount: </span>
                  {discountPercentage()} %
                </div>
                <p className="text-lg font-normal text-gray-500">
                  Price: {formatCurrency(item.price)}
                </p>
                <p className="text-lg font-normal text-black">
                  x <span className="font-bold">{item.quantity}</span>
                </p>
                <h1 className="text-xl">
                  Total: {getTotalCost(formatCurrency())}
                </h1>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => cart.eraseOneFromCart(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-white"
                    >
                      -
                    </button>
                    <div className="mx-4 text-gray-500">
                      <span className="text-2xl text-black">
                        {item.quantity}
                      </span>{" "}
                      
                    </div>
                    <button
                      onClick={() => cart.addOneToCart(item.id, item.price)}
                      className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-white"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => cart.deleteFromCart(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded bg-red-700 text-white"
                    >
                      <BsTrash size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button className="bg-fuchsia-600 p-3 text-white">
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
