import { useState } from 'react'
import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

const AdminRegistroTransacciones = () => {
  const navigationLinks = [
    { path: '/admin-dashboard', label: 'Dashboard' },
    { path: '/admin-gestion-ventas-pagos', label: 'Ventas y Pagos' },
  ]
  
  const [transaction, setTransaction] = useState({
    tipo: 'Cobro',
    monto: '',
    nota: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para registrar la transacción (solo maquetación)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header user="Administrador" extraInfo="Registro de Transacciones" />
      <NavigationMenu links={navigationLinks} />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-4">
        <div className="mb-4">
          <label className="block mb-2">Tipo</label>
          <select
            value={transaction.tipo}
            onChange={(e) => setTransaction({ ...transaction, tipo: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="Cobro">Cobro</option>
            <option value="Pago">Pago</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Monto</label>
          <input
            type="number"
            value={transaction.monto}
            onChange={(e) => setTransaction({ ...transaction, monto: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ingrese monto"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Nota</label>
          <input
            type="text"
            value={transaction.nota}
            onChange={(e) => setTransaction({ ...transaction, nota: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ej: Préstamo para reparación de equipo"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Registrar Transacción
        </button>
      </form>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Resumen Acumulado</h2>
        <p>Total Ingresos: $X</p>
        <p>Total Egresos: $Y</p>
        <p>Saldo Actual: $Z</p>
      </div>
    </div>
  )
}

export default AdminRegistroTransacciones
