import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCart,
} from "../store/slice/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  // const { cart } = useSelector((state) => state);
  const { cart } = useSelector(selectCart);

  function handleCart() {
    dispatch(addToCart(product));
  }

  function handleRemove() {
    dispatch(removeFromCart(product.id));
    console.log("removed");
  }

  return (
    <div className="w-56 border-2 border-green-500 p-5 flex flex-col justify-center align-center text-center gap-5">
      <div className="h-40 m-auto">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full"
        />
      </div>

      <div>
        <h3 className="truncate capitalize">{product.title}</h3>
        <p className="text-lg font-semibold">${product.price}</p>
        <button
          className="bg-green-500 py-2 px-4 text-white mt-2 font-semibold hover:bg-green-400 active:scale-50 duration-300"
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemove
              : handleCart
          }
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
