import { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminConfigLoterias = () => {
  const [lotteryData, setLotteryData] = useState({
    nombre: '',
    tipo: 'Chance',
    horarios: '',
    porcentaje: '',
    capacidad: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Configuración de Loterías</h1>
      </header>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            value={lotteryData.nombre}
            onChange={(e) =>
              setLotteryData({ ...lotteryData, nombre: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Nombre de la lotería"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Tipo</label>
          <select
            value={lotteryData.tipo}
            onChange={(e) =>
              setLotteryData({ ...lotteryData, tipo: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="Chance">Chance</option>
            <option value="Billete">Billete</option>
            <option value="Directo">Directo</option>
            <option value="Pallet">Pallet</option>
            <option value="Tripleta">Tripleta</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Horarios</label>
          <input
            type="text"
            value={lotteryData.horarios}
            onChange={(e) =>
              setLotteryData({ ...lotteryData, horarios: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ej: 10:00-18:00"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">% de ganancia para vendedores</label>
          <input
            type="number"
            value={lotteryData.porcentaje}
            onChange={(e) =>
              setLotteryData({ ...lotteryData, porcentaje: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ej: 10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Capacidad máxima de biles</label>
          <input
            type="number"
            value={lotteryData.capacidad}
            onChange={(e) =>
              setLotteryData({ ...lotteryData, capacidad: e.target.value })
            }
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ej: 100"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Guardar
        </button>
      </form>
      <Link to="/admin-menu" className="bg-gray-500 text-white p-2 rounded block text-center mt-4">
        Volver al Menú
      </Link>
    </div>
  )
}

export default AdminConfigLoterias
