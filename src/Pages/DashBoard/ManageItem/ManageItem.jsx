import { FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const ManageItem = () => {
  const [menu] = useMenu()
  console.log(menu)
  const handleDelete = ()=>{

  }
  return (
    <div className="w-full">
      <SectionTitle heading='manage all item' subHeading='manage'></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              #
              </th>
              <th>Image</th>
              <th></th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
         {
          menu.map((item, index) =>   <tr key ={item._id}>
            <th>
            {index +1}
            </th>
            <td>
              
                <div className="avatar">
                  <div className="mask mask-squircle w-20 h-20">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
            </td>
            <td className=" font-bold">
            {item.name}
             
            </td>
            <td className=" text-right"> ${item.price}</td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
            <td>
            <button
                    onClick={() =>handleDelete(item)}
                    className="btn btn-ghost btn-lg bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
            </td>
          </tr>)
         }
          
          
         
          
          </tbody>
        

        </table>
      </div>
    </div>
  );
};

export default ManageItem;
