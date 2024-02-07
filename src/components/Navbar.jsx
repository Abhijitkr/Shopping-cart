import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between p-5 bg-green-200 fixed container top-0">
      <div className="text-3xl font-bold text-green-600">
        <Link to="/">Shopping Cart (Redux)</Link>
      </div>
      <ul className="flex gap-8 text-xl font-semibold mr-4">
        <li className="hover:text-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
