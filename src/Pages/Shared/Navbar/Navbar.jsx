import { useContext } from "react";
import { Link , NavLink} from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import {  FaShoppingCart} from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";
const Navbar = () => {
const [isAdmin]= useAdmin()
  const [cart]= useCart()
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu"> Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Our Order</NavLink>
      </li>
    
     {
      isAdmin ?  <li>
       <NavLink to="/dashboard/adminHome">DashBoard</NavLink>
     </li> :  <li>
      <NavLink to="/dashboard/userHome">DashBoard</NavLink>
    </li>
     }
      <li>
        <NavLink to="/">
          <button className="h-5">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </NavLink>
      </li>


      {user ? (
        <>
          <span className="  ml-4 font-mono pt-2">{user.displayName}</span>
          <button
            onClick={handleLogOut}
            className="btn btn-active btn-sm btn-ghost "
          >
            LogOut
          </button>{" "}
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to="/login"> Login</Link>
          </li>{" "}
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black opacity-50  font-bold text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className=" uppercase font-bold hover:text-red-600 duration-200 text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
       
      </div>
    </div>
  );
};

export default Navbar;
