import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${row._id}`, {
          method: "DELETE"
        })
        
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount >0){
            refetch()
            Swal.fire("Deleted!", "Your food has been deleted.", "success");
          }
        })

      
      }
    });
  };
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className=" w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className=" uppercase flex items-center justify-between">
        <h3 className=" text-2xl font-bold"> Total Items: {cart.length} </h3>
        <h3 className=" text-2xl font-bold"> Total Price: ${total} </h3>
        <button className="btn btn-outline btn-warning btn-sm">PAY</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food </th>
              <th>Item Name</th>
              <th>Price</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr key={row._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <img
                        src={row.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{row.name}</td>
                <td className="text-end">$ {row.price}</td>
                <th>
                  <button
                    onClick={() =>handleDelete(row)}
                    className="btn btn-ghost btn-lg bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
