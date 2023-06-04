import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";



export default function Card({ products, title }) {
  const [search, setSearch] = useState("");

  console.log(products);


   const filteredProducts = products.filter((product) =>
     product.title.toLowerCase().includes(search.toLowerCase())
   );
  // function filterProducts(search) {
  //   if (search.trim() === "") {
  //     setSearchData([]);
  //   } else {
  //     const filteredProducts = products.filter((product) => {
  //       if (product.title.toLowerCase().includes(search.toLowerCase())) {
  //         return product;
  //       }
  //     });
  //     setSearchData(filteredProducts);
  //   }
  // }

  // if (!products) {
  //   return null;
  // }
  return (
    <>
      <Search onSearch={setSearch} />
      <div className="mt-[110px] xs:mt-[80px]">
        <h2 className="mb-2 mt-8 bg-black p-3 text-center font-semibold uppercase text-white">
          {title}
        </h2>
        <div className="">
          <div className="mb-8 grid grid-cols-1 items-center justify-center gap-3 text-black sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {filteredProducts.map(({ id, title, imageUrl }) => (
              <Link to={`/details/${id}`} key={id}>
                <div className="card-zoom m-3 flex h-full w-full flex-col items-center justify-center border border-gray-400 p-4 text-center">
                  <div className="card-zoom-image">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <h2 className="card-zoom-text font-bold">{title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
