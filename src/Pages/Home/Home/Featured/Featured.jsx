
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featureImage from "../../../../assets/home/featured.jpg";
import './featured.css'


const Featured = () => {
  return (
    <div className="featured-item  text-white pt-10 bg-fixed my-20   bg-gray-950 bg-opacity-25">
    <SectionTitle
    
      heading="Featured Item"
      subHeading="----Check it out-----"
    ></SectionTitle>
    <div className="md: flex justify-center items-center py-20 px-36  ">
      <div>
        <img src={featureImage} alt="" />
      </div>
      <div className="md:ml-10">
        <p>March 20, 2024</p>
        <p className="uppercase">Where can i get some</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          libero consequuntur omnis cupiditate ipsum distinctio quo iure vero.
          Porro alias dolore reprehenderit dicta dolor ullam ipsa sequi sit
          atque iusto, eius, libero aliquid, beatae quae sapiente a veritatis
          distinctio voluptate?
          
        </p>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </div>
    </div>
  </div>
  );
};

export default Featured;
