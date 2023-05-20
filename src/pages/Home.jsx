// import Card from "../components/Card";

import { useState } from "react";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([
    {title: 'Headphones', body: 'lorem ipsum...', author: 'Anders', id: 1 },
    {title: 'Guitar', body: 'lorem ipsum...', author: 'Betty', id: 2 },
    {title: 'Backpack', body: 'lorem ipsum...', author: 'Cicci', id: 3 },
  ]);


  return (
    <div className="h-screen flex flex-col items-center text-black">
      <h1 className=" text-4xl font-bold">Home Page</h1>
      <div className="text-xl">{ '<' } searchbar placeholder { '>' }</div>
      <ProductList products={products} />
      {/* <Card /> */}
    </div>
  );
}
