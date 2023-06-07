import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import { formatCurrency } from "../utils/FormatCurrency";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { BiMinus } from "react-icons/bi";

export default function Card({ products }) {
  const [search, setSearch] = useState("");
  const { discountPercentage } = useShoppingCartContext();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Search onSearch={setSearch} />
      <div className="mt-[110px] xs:mt-[80px]">
        <h2 className="mb-2 mt-8 p-3 text-center font-exa text-xl uppercase text-black">
          {search === "" ? "All Products" : "Your Search"}
        </h2>
        <div className="">
          <div className="relative mb-8 grid grid-cols-1 items-center justify-center gap-3 text-black sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {filteredProducts.map(
              ({ id, title, imageUrl, price, discountedPrice }) => (
                <Link
                  to={`/details/${id}`}
                  key={id}
                >
                  <div className="card-zoom m-3 flex h-full w-full flex-col items-center justify-center border border-gray-400 p-4 text-center">
                    <div className="card-zoom-image">
                      <img src={imageUrl} alt={title} />
                    </div>
                    <h2 className="card-zoom-text">{title}</h2>
                    <div className="absolute left-1 top-1 flex items-center justify-center rounded-full border bg-white px-2 py-1 text-sm shadow-lg">
                      <h2 className=" font-bold">
                        {formatCurrency(discountedPrice)}
                      </h2>
                    </div>
                    {discountedPrice && discountedPrice < price && (
                      <div className="absolute right-2 top-1 flex items-center rounded-full bg-lime-400 px-2 py-1 text-sm shadow-lg">
                        <BiMinus className="mr-1" />
                        {discountPercentage(discountedPrice, price)}%
                      </div>
                    )}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
