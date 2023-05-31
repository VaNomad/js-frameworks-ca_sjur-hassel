import { Link } from "react-router-dom";

export default function Card({ products, title }) {
  console.log(products);
  if (!products) {
    return null;
  }
  return (
    <>
      <h2 className="text-center mt-8 mb-2 font-semibold uppercase bg-black text-white p-3">
        {title}
      </h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-9 justify-center items-center text-black mb-8">
          {products.map(({ id, title, imageUrl }) => (
            <Link to={`/details/${id}`} key={id}>
              <div className="card-zoom flex flex-col justify-center items-center text-center p-4 border border-gray-400 w-full h-full m-3">
                <div className="card-zoom-image">
                  <img src={imageUrl} alt={title} />
                </div>
                <h2 className="card-zoom-text font-bold">{title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
