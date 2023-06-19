import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login please</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              {...register("name",  { required: true })} 
                type="text"  
                placeholder="name"
                className="input input-bordered"
              />
               {errors.name && <span>Name is required</span>}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"  
                {...register("email",  { required: true })} 
                placeholder="Email"

                className="input input-bordered"
              />
               {errors.email && <span>email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", 
                {required: true,
                   minLength: 6,
                    maxLength: 20,
                pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/ 
                
 })} 
              
                placeholder="password"
                className="input input-bordered"
              />
               {errors.password?.type ==='required' && <span className="text-red-500">Password is required</span>}
               {errors.password?.type ==='minLength' && <span className="text-red-500"> 6 character is required</span>}
               {errors.password?.type ==='pattern' && <span className="text-red-500"> password must have one upper case , one lower case, one number and special character</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirm password")} 
                placeholder="password"
                className="input input-bordered"
              />
             
            </div>
           
            <div className="form-control mt-6">
              <input
               
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-center py-4 text-orange-400"> Already Register ? <Link to='/login'> please login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;