import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCart = ({item}) => {
  const {name, price , recipe, image, _id } = item;
  const {user}= useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
  const handleFoodCart = (item) => {
    console.log(item)
    if(user && user.email){
      const orderItem= { menuItemId: _id, name, price, image, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
      .then (res=> res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Cart Item has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Are you sure?',
     
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: ' please login'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: { from: location }})
        }
      })
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className=" h-96"
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-gray-900 text-white absolute right-0 mt-5 mr-5 px-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
        <button onClick={()=>handleFoodCart(item)} className="btn text-orange-500 btn-outline border-0 border-b-4 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
