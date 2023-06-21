import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn}= useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";


  const handleGoogleSignIn = ()=> {
  googleSignIn()
.then(result => {
  const loggedInUser = result.user;
  console.log(loggedInUser)
  const savedUser = { name: loggedInUser.name, email: loggedInUser.email };
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(savedUser)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "user Created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    }
  })











  navigate(from, { replace: true });
})
.catch(error=> {
  console.log(error.message)
})
  }
  return (
    <div>
      <div className="divider"></div>
      <div className=" text-center mb-4">
        <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
