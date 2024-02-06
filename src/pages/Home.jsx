import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-80 items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-between my-10 p-5">
          {products &&
            products.length &&
            products.map((product) => (
              <div key={product.id} className="">
                Product Items
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
