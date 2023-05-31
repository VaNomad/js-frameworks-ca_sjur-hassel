import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

export default function CheckOut() {
   const cart = useContext(ShoppingCartContext);

   const productsCount = cart.items.reduce(
     (sum, product) => sum + product.quantity,
     0
   );
  return (
    <>
      <div className="h-screen flex justify-center items-center text-4xl text-black font-bold">
        <h1>Cart Page</h1>
      </div>
    </>
  );
}
