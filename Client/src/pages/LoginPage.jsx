import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {Array.isArray(signinErrors) &&
          signinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
              {error}
            </div>
          ))}

        <h2 className="text-2xl font-bold text-center">Log In</h2>
        <h1 className="text-2xl text-white text-center my-2"> MAYNOOTH </h1>
        <form onSubmit={onSubmit}>
          <h1>Email</h1>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <h2>Password</h2>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Your Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <a className="w-full text-center"> Forgot password? </a>

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-300 text-white px-4 py-2 rounded-md my-2 "
          >
            Login
          </button>
        </form>
        <p className=" flex gap-x-2 justify-between">
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500">
            {" "}
            Sign up{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
