import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  console.log(cart, totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="h-full mt-28 mb-10">
      {cart && cart.length ? (
        <div className="">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-5">
            Your Cart
          </h1>
          <div className="flex ">
            <div className="flex flex-col items-center container gap-5 w-1/2">
              {cart.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
            <div className="flex flex-col w-1/4 text-center bg-green-200 h-40 justify-center mt-60 fixed right-80 shadow-green-500 shadow-md ">
              <h2 className="text-3xl font-bold">Cart Summary</h2>
              <p>
                <span className="text-lg font-medium">Total Item: </span>
                <span className="text-xl font-semibold">{cart.length}</span>
              </p>
              <p>
                <span className="text-lg font-medium">Total Price: </span>
                <span className="text-xl font-semibold">${totalCart}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen text-center mt-60">
          <h2 className="text-3xl font-bold">Your Cart is Empty</h2>
          <Link to="/">
            <button className="bg-green-500 py-2 px-4 text-white mt-2 font-semibold hover:bg-green-400 active:scale-50 duration-300 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
