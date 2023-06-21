import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const response = await fetch("http://localhost:5000/users");
    return response.json();
  });

  const handleDelete = (user) => {};

  return (
    <div>
      <h3 className="font-semibold text-2xl">Total users: {users.length} </h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-lg bg-orange-500 text-white">
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
