import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  console.log(cart, totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return <div>Cart</div>;
}
