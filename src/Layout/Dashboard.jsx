import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaCalendarMinus,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiMenuLine } from 'react-icons/ri';
import useCart from "../Hooks/useCart";
const Dashboard = () => {
const [cart]= useCart()


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li>
            <NavLink to='/'>
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>
              
              <FaCalendarMinus></FaCalendarMinus> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaShoppingCart></FaShoppingCart> my Cart
              <div className="badge badge-secondary"> +{cart?.length} </div>
            </NavLink>
          
          </li>
          <li>
            <NavLink to='/'>
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">  <RiMenuLine />Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingCart></FaShoppingCart> Shop
              
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>
              
              <FaPhoneAlt></FaPhoneAlt> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
