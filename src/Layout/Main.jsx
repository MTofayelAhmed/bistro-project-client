import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { useLocation } from 'react-router-dom';


const Main = () => {
const location = useLocation()
console.log(location)
const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
     { noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
     {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;