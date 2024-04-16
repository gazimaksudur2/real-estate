import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="h-full">
      <form
        className="h-full flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-ubuntu font-semibold text-xl">Login to your account</h2>
        <h4 className="font-roboto text-sm">
          Don{`'`}t have an account?<Link className="text-blue-600" to={'/authenticate/register'}>Sign Up</Link>
        </h4>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className=""
          defaultValue="Email address"
          {...register("example")}
        />
        <input
          className=""
          defaultValue="Password"
          {...register("example")}
        />
        <input
          className=""
          defaultValue="Email address"
          {...register("example")}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
