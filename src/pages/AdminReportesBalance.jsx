import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

const AdminReportesBalance = () => {
  const navigationLinks = [
    { path: '/admin-dashboard', label: 'Dashboard' },
    { path: '/admin-gestion-ventas-pagos', label: 'Ventas y Pagos' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header user="Administrador" extraInfo="Reportes y Balance" />
      <NavigationMenu links={navigationLinks} />
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2">Selecciona el tipo de reporte</label>
          <select className="w-full border border-gray-300 p-2 rounded">
            <option value="ventas">Ventas Diarias</option>
            <option value="ganadores">Tickets Ganadores</option>
            <option value="balances">Balances</option>
          </select>
        </div>
        <div className="mb-4">
          <p>Gráficos y tablas consolidados de ventas, tickets ganadores y resultados por lotería.</p>
        </div>
      </div>
    </div>
  )
}

export default AdminReportesBalance
