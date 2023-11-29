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

  // Utilizando el contexto de autenticación
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  // Redirigir al usuario si está autenticado
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-200 max-w-md w-full p-10 rounded-md">
        {/* Mostrar errores de inicio de sesión */}
        {Array.isArray(signinErrors) &&
          signinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
              {error}
            </div>
          ))}

        <h2 className="text-3xl font-bold text-center">Log In</h2>
        <h1 className="text-2xl text-black text-center my-2"> MAYNOOTH </h1>
        <form onSubmit={onSubmit}>
          {/* Campos de entrada para correo electrónico y contraseña */}
          <h1>Email</h1>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-slate-50 text-black px-5 py-2 rounded-md my-2"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <h2>Password</h2>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-slate-50 text-black px-5 py-2 rounded-md my-2"
            placeholder="Your Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          {/* Enlace para recuperar la contraseña */}
          <a className="w-full text-center"> Forgot password? </a>

          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-300 text-white px-4 py-2 rounded-md my-2 "
          >
            Login
          </button>
        </form>

        {/* Botones para continuar con Google y Facebook */}
        <button
          type="submit"
          className="w-full  bg-slate-50 hover:bg-slate-50 text-black px-4 py-2 rounded-md my-2 "
        >
          continue con google
        </button>
        <button
          type="submit"
          className="w-full  bg-slate-50 hover:bg-slate-50 text-black px-4 py-2 rounded-md my-2 "
        >
          continue con facebook Google
        </button>

        {/* Enlace para registrarse */}
        <p className=" flex gap-x-2 justify-between">
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500">
            {" "}
            Sign up{" "}
          </Link>
        </p>

        {/* Checkbox para aceptar términos y condiciones */}
        <div className="flex gap-5 my-2 ">
          <input type="checkbox" name="" id="" className="w-10" />
          <p>
            Al continuar, acepto los términos de uso y la política de
            privacidad.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
