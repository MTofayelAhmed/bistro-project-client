const FoodCart = ({item}) => {
  const {name, price , recipe, image, } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className=" h-96"
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-gray-900 text-white absolute right-0 mt-5 mr-5 px-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
        <button className="btn text-orange-500 btn-outline border-0 border-b-4 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
