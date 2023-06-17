
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
const [menu]= useMenu()
const popular = menu.filter(item => item.category === "popular")

  return (
    <section className="mb-16">
      <SectionTitle heading="from our menu" subHeading="Popular Items" />
      <div className=" grid grid-cols-2 gap-5">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className=" text-center mt-10">
     <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
     </div>
    </section>
  );
};

export default PopularMenu;

