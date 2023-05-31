import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
// import { formatCurrency } from "../utils/FormatCurrency";

export default function CheckOut() {
   const cart = useContext(ShoppingCartContext);

   const productsCount = cart.items.reduce(
     (sum, product) => sum + product.quantity,
     0
   );
  return (
    <>
      <div className="flex h-screen items-center justify-center text-4xl font-bold text-black">
        <h1>Cart Page</h1>
        {productsCount == 0 ? (
          <>
            <h1>Your shopping cart is empty</h1>
          </>
        ) : (
          <>
            <h2 className="fixed top-[155px] mb-2 bg-black px-6 py-2 text-center font-semibold uppercase text-white sm:top-[165px] md:absolute md:top-[60px] md:z-[-1]">
              Item Details
            </h2>
            {cart.items.map((currentProduct, index) => (
              <div key={currentProduct.id}>
                <h1>{currentProduct.title}</h1>
                <button className="bg-fuchsia-600 p-3 text-white">
                  Place Order
                </button>
              </div>
            ))}
            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
          </>
        )}
      </div>
    </>
  );
}
