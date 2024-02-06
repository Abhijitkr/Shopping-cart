import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" flex justify-between p-4 bg-green-200 m-5">
      <div className="text-3xl font-bold text-green-500">
        <Link to="/">Shopping Cart (Redux)</Link>
      </div>
      <ul className="flex gap-8 text-xl font-semibold mr-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
