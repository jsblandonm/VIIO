import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  // Extraer funciones y estados necesarios de react-hook-form y useAuth
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  // Redirigir al usuario si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-200 max-w-md w-full p-10 rounded-md">
        {/* Mostrar errores de registro */}
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-center">Register</h1>

        <form onSubmit={onSubmit}>
          {/* Campos de entrada para nombre de usuario, correo electrónico y contraseña */}
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-slate-50 text-black px-5 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-slate-50 text-black px-5 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-slate-50 text-black px-5 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          {/* Botón de registro */}

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-300 text-white px-4 py-2 rounded-md my-2 "
          >
            Register
          </button>
        </form>

        {/* Enlace para iniciar sesión si ya tienes una cuenta */}
        <p className="flex gap-x-2 justify-between">
          Already have an account{" "}
          <Link to="/login" className="text-sky-500">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
