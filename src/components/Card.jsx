import { Link } from "react-router-dom";

export default function Card({ products, title }) {
  return (
    <>
      <h2 className="text-center mt-8 mb-2 font-semibold uppercase bg-black text-white p-3">
        {title}
      </h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-9 justify-center items-center text-black mb-8">
          {products.map(({ id, title, imageUrl, price }) => (
            <Link to={`/details/${id}`} key={id}>
              <div className="card-zoom flex flex-col justify-center items-center text-center p-4 border border-gray-400 w-full h-full m-3">
                <div className="card-zoom-image">
                  <img src={imageUrl} alt={title} />
                </div>
                <h2 className="card-zoom-text bg-black text-white font-bold py-[30px] px-[50px]">
                  {title}
                </h2>
                <h2 className="text-white font-bold card-zoom-text bg-black top-0 w-screen py-2">${price}</h2>
                <h2 className="card-zoom-button border-1 border-gray-400 font-exa text-xl bottom-3">
                  View Item
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
