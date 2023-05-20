// import Card from "../components/Card";

import { useState } from "react";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([
    {title: 'Headphones', body: 'lorem ipsum...', author: 'Anders', id: 1 },
    {title: 'Guitar', body: 'lorem ipsum...', author: 'Betty', id: 2 },
    {title: 'Backpack', body: 'lorem ipsum...', author: 'Cicci', id: 3 },
    {title: 'Binoculars', body: 'lorem ipsum...', author: 'Cicci', id: 4 },
    {title: 'Skis', body: 'lorem ipsum...', author: 'Cicci', id: 5 },
  ]);


  return (
    <div className="h-screen flex flex-col items-center text-black">
      <h1 className=" text-4xl font-bold">Home Page</h1>
      <div className="text-xl">{ '<' } searchbar placeholder { '>' }</div>
      <ProductList products={products.filter((product) => product.author === 'Cicci')} title="Cicci's Products" />
      <ProductList products={products} title="All Products" />
      {/* <Card /> */}
    </div>
  );
}
