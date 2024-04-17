import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const { createUser, setUser, updateUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
    .then(user=>{
      user.displayName = data.name;
      user.photoURL = data.url;
      console.log(user);
      setUser(user)
      updateUser(data.name, data.url);
      navigate('/');
    })
    .catch(error=>console.log(error.message))
  }

  // console.log(watch("example"));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="h-full">
      <form
        className="h-full w-[75%] mx-auto flex flex-col justify-center items-center card-body"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-ubuntu font-semibold text-xl">
          Register Here
        </h2>
        <h4 className="font-roboto text-sm">
          Already have an account?
          <Link className="text-blue-600" to={"/authenticate"}>
            Login
          </Link>
        </h4>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="name"
            {...register("name")}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            {...register("email")}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo URL"
            {...register("url")}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="password"
            {...register("password")}
            className="input input-bordered"
            required
          />
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
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <h2 className="font-ubuntu text-sm">
          I agree to the <span className="underline text-blue-500">privacy policy</span> and <span className="underline text-blue-500">terms of service.</span>
        </h2>
        <div className="form-control w-full mt-4">
          <button className="btn btn-primary">Register</button>
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

export default Register;
