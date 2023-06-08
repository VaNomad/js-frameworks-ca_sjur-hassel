import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import creditcard from "../assets/creditcard.png"

export default function CheckOut() {
  const cart = useShoppingCartContext();

  return (
    <div className="mt-[90px] text-center">
      <div className="z-10 m-2 mx-auto max-w-[150px] rounded-full bg-black px-2 py-1 text-center text-xs font-semibold uppercase text-white xs:text-base">
        <p>Check Out</p>
      </div>
      <div className="container mx-auto my-4 border">
        <div className="">
          
        </div>
        <Link to="/checkoutsuccess">
          <button
            onClick={() => cart.deleteAllFromCart()}
            className="buttonCta"
          >
            Buy
          </button>
        </Link>
      </div>
    </div>
  );
}