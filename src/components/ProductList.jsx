
export default function ProductList({ products, title }) {
  return (
    <div className="flex justify-center items-center text-black mt-8">
      { products.map((product) => (
        <div className="flex flex-col justify-center items-center text-center p-4 border border-gray-400 w-full h-full m-3" key={ product.id }>
          <h2 className="font-bold">{ product.title }</h2>
          <p>Posted by {product.author}</p>
        </div>
      ))}
    </div>
  );
}