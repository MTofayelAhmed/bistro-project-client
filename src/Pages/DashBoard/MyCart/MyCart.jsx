import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
    
      <div className=" uppercase">
        <h3 className=" text-3xl font-bold"> Total Items: {cart.length} </h3>
        <h3 className=" text-3xl font-bold"> Total Price: ${total} </h3>
        <button className="btn btn-outline btn-warning btn-sm">PAY</button>
      </div>
    </div>
  );
};

export default MyCart;
