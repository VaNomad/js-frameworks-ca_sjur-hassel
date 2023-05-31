import { useShoppingCartContext } from "../context/ShoppingCartContext";
// import { useProductListContext } from "../context/ProductListContext";
// import { useContext } from "react";
// import { formatCurrency } from "../utils/FormatCurrency";

export default function CheckOut() {
  const { items, getTotalCost } = useShoppingCartContext();
  // const { products } = useProductListContext();

   const productsCount = items.reduce(
     (sum, product) => sum + product.quantity,
     0
   );
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center text-4xl font-bold text-black">
        {productsCount == 0 ? (
          <>
            <h1>Your shopping cart is empty</h1>
          </>
        ) : (
          <>
            <h2 className="mb-2 bg-black px-6 py-2 text-center font-semibold uppercase text-white">
              Item Details
            </h2>
            {items.map((item) => (
              <div key={item.id}>
                <h1>{ item.title }</h1>
                <div><img src={item.imageUrl} alt={item.title} /></div>
                <h2>Price: { item.discountedPrice }</h2>
                <h3>Quantity: {item.quantity}</h3>
              </div>
            ))}
            <h1>Total: {getTotalCost().toFixed(2)}</h1>
            <button className="bg-fuchsia-600 p-3 text-white">
              Place Order
            </button>
          </>
        )}
      </div>
    </>
  );
}
