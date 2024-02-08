import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slice/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  return (
    <div className="flex bg-green-200 h-52 justify-around w-96 items-center mx-5 p-4 rounded hover:shadow-green-400 hover:shadow-md ">
      <div className="h-40 max-w-32">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="h-full object-contain"
        />
      </div>
      <div className="text-center">
        <p className="flex flex-col w-40">
          <span className="truncate font-semibold">{cartItem.title}</span>
          <span className="font-bold text-xl">${cartItem.price}</span>
        </p>
        <button
          onClick={() => dispatch(removeFromCart(cartItem.id))}
          className="bg-green-500 py-2 px-4 text-white mt-2 font-semibold hover:bg-green-400 active:scale-50 duration-300 rounded-md"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
