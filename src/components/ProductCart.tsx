type producttype = { id: number; name: string; price: number; image: string };

const ProductCart = ({ id, name, price, image }: producttype) => {
  return (
    <>
      <div className="my-8 rounded-lg bg-white p-4 shadow-lg">
        <div className="flex justify-center">
          <img
            src={image}
            alt={name}
            className="h-60 rounded-lg object-cover"
          />
        </div>
        <div className="mt-10 text-center">
          <div className="">
            <h3 className="text-lg font-bold md:text-lg">{name}</h3>
            <p className="">${price}</p>
          </div>
          <button className="mb-2 mt-6 rounded-md bg-sky-600 px-4 py-3 text-white hover:bg-black md:px-6">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
