import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
  return (
   <div className=" mb-14">
       { title && <Cover img={img} title={title}></Cover>}
       <div className=" grid grid-cols-2 gap-5 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

 <div className="mx-auto text-center"> 
 <Link to={`/order/${title}`}><button className="btn btn-outline  border-0 border-b-4 mt-4">
  Order Your Favorite Food</button></Link></div>
   </div>
  );
};

export default MenuCategory;