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
    <div className="h-full flex flex-col justify-center items-around gap-5 mt-28 mb-10">
      <h1 className="text-4xl font-bold text-center mb-2 text-green-600">
        Your Cart
      </h1>
      {cart && cart.length ? (
        cart.map((cartItem) => (
          <CartTile key={cartItem.id} cartItem={cartItem} />
        ))
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
