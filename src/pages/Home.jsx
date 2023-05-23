// import Card from "../components/Card";

import { useState, useEffect } from "react";
// import ProductList from "../components/ProductList";
import Card from "../components/Card";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();

      setProducts(json);
    }
    getData();
    
  }, []);

  console.log(products);


  return (
    <div className="h-screen flex flex-col items-center text-black">
      <h1 className=" text-4xl font-bold">Home Page</h1>
      <div className="text-xl">
        {"<"} searchbar placeholder {">"}
      </div>
      {products.length > 0 && <Card products={products} title="All Products" />}
    </div>
  );
}


{
  /* <ProductList products={products.filter((product) => product.author === 'Cicci')} title="Cicci's Products" /> */
}
{
  /* <ProductList products={products} title="All Products" /> */
}