import chefImage from '../../../assets/home/chef-service.jpg'

const Introduction = () => {
  return (
    <div className="hero min-h-screen mb-16"  style={{ backgroundImage: `url(${chefImage})` }}>
    <div className="hero-overlay  bg-opacity-60"></div>
    <div className="hero-content text-center bg-white rounded-md  shadow-2xl">
      <div className="max-w-2xl ">
        <h1 className="mb-5 text-3xl font-semibold uppercase">Bistro Boss</h1>
        <p className="mb-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur debitis esse atque suscipit maxime commodi unde sed deleniti. Dolor nihil dolorem totam quam accusamus, rerum aut amet earum aliquid voluptas ea doloremque repudiandae esse ducimus dolore ipsum beatae eum exercitationem obcaecati numquam! Odio nemo suscipit sapiente alias aspernatur velit.
          
          </p>
        
      </div>
    </div>
  </div>
  );
};

export default Introduction;