import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

export default function CheckOut() {
  const cart = useShoppingCartContext();

  return (
    <div className="flex h-screen items-center justify-center text-6xl font-bold">
      Check Out
      <Link to="/checkoutsuccess">
        <button
          onClick={() => cart.deleteAllFromCart()}
          className="buttonCta fixed bottom-[65px] left-0 right-0 mx-auto"
        >
          Buy
        </button>
      </Link>
    </div>
  );
}