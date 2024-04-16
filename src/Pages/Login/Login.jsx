import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useContext(AuthContext);

  const onSubmit = (data) => {
    // console.log(data)
    login(data.email, data.password)
    .then(user=>{
      console.log(user);
      navigate('/');
    })
    .catch(error=>console.log(error.message))
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="h-full">
      <form
        className="h-full w-[75%] mx-auto flex flex-col justify-center items-center card-body"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-ubuntu font-semibold text-xl">
          Login to your account
        </h2>
        <h4 className="font-roboto text-sm">
          Don{`'`}t have an account?
          <Link className="text-blue-600" to={"/authenticate/register"}>
            Sign Up
          </Link>
        </h4>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-xs text-red-500">Email field is required</span>}
        </div>
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-xs text-red-500">Password field is required</span>}
          {showPass ? (
            <LuEyeOff
              className="absolute right-5 top-[62%]"
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <LuEye
              className="absolute right-5 top-[62%]"
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="form-control">
            <label className="label cursor-pointer gap-4 flex-row-reverse">
              <span className="label-text">Remember me</span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control w-full mt-6">
          <button className="btn btn-primary">Login</button>
          <label className="label w-full flex justify-center">
            <Link to={"/"} className="label-text-alt link link-hover">
              Go Back Home
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;
