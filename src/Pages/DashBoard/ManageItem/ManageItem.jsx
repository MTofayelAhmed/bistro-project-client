import { FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageItem = () => {
  const [menu, refetch] = useMenu()
  const [axiosSecure] = useAxiosSecure()
  console.log(menu)
  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`)
        .then(res=> {
     
          console.log("deleted response",  res.data )
          refetch()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
      }
    })
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
              menu.map((item, index) => <tr key={item._id}>
                <th>
                  {index + 1}
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
                    onClick={() => handleDelete(item)}
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
