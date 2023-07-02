import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover image */}
      <Cover img={menuImage} title='Our Menu'></Cover>
      <SectionTitle
        subHeading="Don,t Miss"
        heading="todays Offer"
      ></SectionTitle>
      {/* offered menu category without cover img */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert with cover img */}
      <MenuCategory
      title="dessert"
  
      img ={dessertImage}
      items = {desserts}
      ></MenuCategory>
      {/* soup with cover image */}
      <MenuCategory items= {soup} title ="soup" img ={ soupImage}></MenuCategory>
      <MenuCategory items={pizza} title='pizza' img ={pizzaImage}></MenuCategory>
      <MenuCategory items={salad} title='salad' img ={saladImage}></MenuCategory>
    </div>
  );
};

export default Menu;
