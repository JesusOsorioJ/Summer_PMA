import { useState } from 'react'
import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

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

  const navigationLinks = [
    { path: '/admin-dashboard', label: 'Dashboard' },
  ]

  return (
    <Layout className="min-h-screen bg-gray-100 p-4" view="AdminConfigLoterias">
      <Header user="Administrador" extraInfo="Configuración de Loterías" />
      <NavigationMenu links={navigationLinks} />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            value={lotteryData.nombre}
            onChange={(e) => setLotteryData({ ...lotteryData, nombre: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Nombre de la lotería"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Tipo</label>
          <select
            value={lotteryData.tipo}
            onChange={(e) => setLotteryData({ ...lotteryData, tipo: e.target.value })}
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
            onChange={(e) => setLotteryData({ ...lotteryData, horarios: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ej: 10:00-18:00"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">% de ganancia</label>
          <input
            type="number"
            value={lotteryData.porcentaje}
            onChange={(e) => setLotteryData({ ...lotteryData, porcentaje: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ej: 10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Capacidad máxima de biles</label>
          <input
            type="number"
            value={lotteryData.capacidad}
            onChange={(e) => setLotteryData({ ...lotteryData, capacidad: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ej: 100"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Guardar
        </button>
      </form>
      <Link to="/admin-dashboard" className="bg-gray-500 text-white p-2 rounded block text-center mt-4">
        Volver al Dashboard
      </Link>
    </Layout>
  )
}

export default AdminConfigLoterias
