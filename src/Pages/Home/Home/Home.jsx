import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Recommendation from "../ChefRecomendation/Recommendation";
import Introduction from "../Introduction/Introduction";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import Featured from "./Featured/Featured";


const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Category></Category>
    <Introduction></Introduction>
    <PopularMenu></PopularMenu>
    <Recommendation></Recommendation>
    <Featured></Featured>
    <Testimonial></Testimonial>

    </div>
  );
};

export default Home;