import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Nombre</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Nombre completo"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="usuario@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="********"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Rol</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option value="vendedor">Vendedor</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-500">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
