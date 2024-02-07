export default function ProductTile({ product }) {
  return (
    <div className="w-48 border-2 border-green-500 p-5 flex flex-col justify-center align-center text-center gap-5">
      <div className="h-40 m-auto">
        <img
          src={product.image}
          alt={product.description}
          className="object-contain h-full"
        />
      </div>

      <div>
        <h3 className="truncate capitalize">{product.description}</h3>
        <p className="text-lg font-semibold">${product.price}</p>
        <button className="bg-green-500 py-2 px-4 text-white mt-2 font-semibold hover:bg-green-400 active:scale-50 duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
