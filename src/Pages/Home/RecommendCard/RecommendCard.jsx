const RecommendCard = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <div className="card card-compact w-100 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body mx-auto">
        <h2 className=" mx-auto text-xl text-bold font-bold ">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className=" text-center mt-10">
          <button className="btn text-orange-500 btn-outline border-0 border-b-4 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
