export default function Card({products, title}) {
  return (
    <>
      <h2 className="mt-8 mb-2 font-semibold uppercase bg-black text-white p-3">
        {title}{" "}
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="grid grid-cols-3 gap-3 justify-center items-center text-black mb-8">
          {products.map((product) => (
            <div
              className="card-zoom flex flex-col justify-center items-center text-center p-4 border border-gray-400 w-full h-full m-3"
              key={product.id}
            >
              <div className="card-zoom-image">
                <img src={ product.imageUrl } alt={ product.title } /></div>
              <h2 className="card-zoom-text font-bold">{product.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

