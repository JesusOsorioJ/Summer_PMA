import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-800 gap-3 flex flex-col items-center  justify-center">
      <Link to="/" className="flex ms-2">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 me-3"
          alt="FlowBite Logo"
        />
        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
          SUMMER
        </span>
      </Link>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="usuario@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-500">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
